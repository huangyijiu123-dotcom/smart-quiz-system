// 全局主题管理器
class ThemeManager {
    constructor() {
        this.currentTheme = 'light';
        this.init();
    }

    // 初始化主题管理器
    init() {
        this.loadTheme();
        
        // 确保DOM准备好后再应用主题
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.applyTheme(this.currentTheme);
                this.bindSystemThemeChange();
            });
        } else {
            this.applyTheme(this.currentTheme);
            this.bindSystemThemeChange();
        }
    }

    // 从存储中加载主题设置
    loadTheme() {
        try {
            const savedSettings = WebViewCompat.storage.getItem('appSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                this.currentTheme = settings.theme || 'light';
            }
        } catch (error) {
            console.warn('Failed to load theme settings:', error);
            this.currentTheme = 'light';
        }
    }

    // 保存主题设置
    saveTheme(theme) {
        try {
            const savedSettings = WebViewCompat.storage.getItem('appSettings');
            const settings = savedSettings ? JSON.parse(savedSettings) : {};
            settings.theme = theme;
            WebViewCompat.storage.setItem('appSettings', JSON.stringify(settings));
        } catch (error) {
            console.warn('Failed to save theme settings:', error);
        }
    }

    // 应用主题
    applyTheme(theme) {
        const body = document.body;
        
        // 确保body元素存在
        if (!body) {
            console.warn('Document body not ready, deferring theme application');
            // 延迟执行，等待DOM加载完成
            setTimeout(() => this.applyTheme(theme), 100);
            return;
        }
        
        // 移除所有主题类
        body.classList.remove('theme-light', 'theme-dark', 'theme-auto');
        
        this.currentTheme = theme;
        
        if (theme === 'dark') {
            body.classList.add('theme-dark');
        } else if (theme === 'auto') {
            body.classList.add('theme-auto');
            // 检测系统偏好或时间
            if (this.shouldUseDarkMode()) {
                body.classList.add('theme-dark');
            }
        } else {
            body.classList.add('theme-light');
        }
        
        // 保存设置
        this.saveTheme(theme);
        
        // 触发主题变化事件
        this.dispatchThemeChangeEvent(theme, body.classList.contains('theme-dark'));
    }

    // 判断是否应该使用深色模式
    shouldUseDarkMode() {
        // 优先检测系统偏好
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        
        // 根据时间判断（18:00-06:00 使用深色模式）
        const hour = new Date().getHours();
        return hour >= 18 || hour <= 6;
    }

    // 监听系统主题变化
    bindSystemThemeChange() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (this.currentTheme === 'auto') {
                    this.applyTheme('auto');
                }
            });
        }
    }

    // 触发主题变化事件
    dispatchThemeChangeEvent(theme, isDark) {
        const event = new CustomEvent('themeChanged', {
            detail: { theme, isDark }
        });
        document.dispatchEvent(event);
        
        // 通知父窗口（如果在iframe中）
        if (window.parent !== window) {
            window.parent.postMessage({
                action: 'themeChange',
                theme: theme,
                isDark: isDark
            }, '*');
        }
    }

    // 获取当前主题
    getCurrentTheme() {
        return this.currentTheme;
    }

    // 检查是否为深色模式
    isDarkMode() {
        return document.body.classList.contains('theme-dark');
    }

    // 切换主题（供外部调用）
    setTheme(theme) {
        this.applyTheme(theme);
    }
}

// 创建全局主题管理器实例
window.themeManager = new ThemeManager();

// 暴露给其他脚本使用的函数
window.getTheme = () => window.themeManager.getCurrentTheme();
window.setTheme = (theme) => window.themeManager.setTheme(theme);
window.isDarkMode = () => window.themeManager.isDarkMode();