// WebView兼容性工具库
// 解决Android WebView中的API兼容性问题

(function(window) {
    'use strict';

    // 创建兼容性命名空间
    window.WebViewCompat = window.WebViewCompat || {};

    // ===== localStorage 兼容性处理 =====
    const StorageCompat = {
        // 内存存储作为降级方案
        memoryStorage: {},
        
        // 检测localStorage是否可用
        isLocalStorageAvailable: function() {
            try {
                const test = '__localStorage_test__';
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                return false;
            }
        },

        // 安全的setItem
        setItem: function(key, value) {
            try {
                if (this.isLocalStorageAvailable()) {
                    localStorage.setItem(key, value);
                } else {
                    this.memoryStorage[key] = value;
                }
                return true;
            } catch (e) {
                console.warn('Storage setItem failed:', e);
                this.memoryStorage[key] = value;
                return false;
            }
        },

        // 安全的getItem
        getItem: function(key) {
            try {
                if (this.isLocalStorageAvailable()) {
                    return localStorage.getItem(key);
                } else {
                    return this.memoryStorage[key] || null;
                }
            } catch (e) {
                console.warn('Storage getItem failed:', e);
                return this.memoryStorage[key] || null;
            }
        },

        // 安全的removeItem
        removeItem: function(key) {
            try {
                if (this.isLocalStorageAvailable()) {
                    localStorage.removeItem(key);
                } else {
                    delete this.memoryStorage[key];
                }
                return true;
            } catch (e) {
                console.warn('Storage removeItem failed:', e);
                delete this.memoryStorage[key];
                return false;
            }
        },

        // 安全的clear
        clear: function() {
            try {
                if (this.isLocalStorageAvailable()) {
                    localStorage.clear();
                } else {
                    this.memoryStorage = {};
                }
                return true;
            } catch (e) {
                console.warn('Storage clear failed:', e);
                this.memoryStorage = {};
                return false;
            }
        }
    };

    // ===== 振动API兼容性处理 =====
    const VibrationCompat = {
        vibrate: function(pattern) {
            try {
                if (navigator.vibrate && typeof navigator.vibrate === 'function') {
                    return navigator.vibrate(pattern);
                }
                return false;
            } catch (e) {
                console.warn('Vibration API failed:', e);
                return false;
            }
        }
    };

    // ===== Web Audio API兼容性处理 =====
    const AudioCompat = {
        createAudioContext: function() {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (AudioContext) {
                    return new AudioContext();
                }
                return null;
            } catch (e) {
                console.warn('AudioContext creation failed:', e);
                return null;
            }
        },

        playTone: function(frequency, duration, type) {
            const audioContext = this.createAudioContext();
            if (!audioContext) {
                console.warn('Audio playback not supported');
                return Promise.resolve();
            }

            return new Promise((resolve) => {
                try {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
                    oscillator.type = type || 'sine';
                    
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + duration / 1000);
                    
                    oscillator.onended = () => resolve();
                } catch (e) {
                    console.warn('Audio playback failed:', e);
                    resolve();
                }
            });
        }
    };

    // ===== matchMedia兼容性处理 =====
    const MediaQueryCompat = {
        matchMedia: function(query) {
            try {
                if (window.matchMedia && typeof window.matchMedia === 'function') {
                    return window.matchMedia(query);
                }
                // 降级方案：返回一个模拟对象
                return {
                    matches: false,
                    media: query,
                    addListener: function() {},
                    removeListener: function() {}
                };
            } catch (e) {
                console.warn('matchMedia failed:', e);
                return {
                    matches: false,
                    media: query,
                    addListener: function() {},
                    removeListener: function() {}
                };
            }
        }
    };

    // ===== 对话框兼容性处理 =====
    const DialogCompat = {
        // 创建自定义对话框
        createDialog: function(type, message, defaultValue) {
            return new Promise((resolve) => {
                const overlay = document.createElement('div');
                overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                `;

                const dialog = document.createElement('div');
                dialog.style.cssText = `
                    background: white;
                    border-radius: 8px;
                    padding: 20px;
                    max-width: 300px;
                    width: 90%;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                `;

                const messageEl = document.createElement('div');
                messageEl.textContent = message;
                messageEl.style.cssText = 'margin-bottom: 20px; color: #333; line-height: 1.4;';
                dialog.appendChild(messageEl);

                let inputEl;
                if (type === 'prompt') {
                    inputEl = document.createElement('input');
                    inputEl.type = 'text';
                    inputEl.value = defaultValue || '';
                    inputEl.style.cssText = `
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        margin-bottom: 20px;
                        box-sizing: border-box;
                    `;
                    dialog.appendChild(inputEl);
                }

                const buttonContainer = document.createElement('div');
                buttonContainer.style.cssText = 'display: flex; justify-content: flex-end;';

                if (type === 'confirm' || type === 'prompt') {
                    const cancelBtn = document.createElement('button');
                    cancelBtn.textContent = '取消';
                    cancelBtn.style.cssText = `
                        padding: 8px 16px;
                        border: 1px solid #ddd;
                        background: #f5f5f5;
                        border-radius: 4px;
                        cursor: pointer;
                    `;
                    cancelBtn.onclick = () => {
                        document.body.removeChild(overlay);
                        resolve(type === 'prompt' ? null : false);
                    };
                    buttonContainer.appendChild(cancelBtn);
                }

                const okBtn = document.createElement('button');
                okBtn.textContent = '确定';
                okBtn.style.cssText = `
                    padding: 8px 16px;
                    border: none;
                    background: #007bff;
                    color: white;
                    border-radius: 4px;
                    cursor: pointer;
                `;
                okBtn.onclick = () => {
                    document.body.removeChild(overlay);
                    if (type === 'prompt') {
                        resolve(inputEl ? inputEl.value : '');
                    } else {
                        resolve(true);
                    }
                };
                buttonContainer.appendChild(okBtn);
                
                // WebView兼容性：为不支持gap的浏览器添加margin
                if (buttonContainer.children.length > 1) {
                    okBtn.style.marginLeft = '10px';
                }

                dialog.appendChild(buttonContainer);
                overlay.appendChild(dialog);
                document.body.appendChild(overlay);

                if (inputEl) {
                    inputEl.focus();
                    inputEl.select();
                }
            });
        },

        alert: function(message) {
            if (typeof window.alert === 'function') {
                try {
                    window.alert(message);
                    return Promise.resolve();
                } catch (e) {
                    console.warn('Native alert failed, using custom dialog:', e);
                }
            }
            return this.createDialog('alert', message);
        },

        confirm: function(message) {
            if (typeof window.confirm === 'function') {
                try {
                    return Promise.resolve(window.confirm(message));
                } catch (e) {
                    console.warn('Native confirm failed, using custom dialog:', e);
                }
            }
            return this.createDialog('confirm', message);
        },

        prompt: function(message, defaultValue) {
            if (typeof window.prompt === 'function') {
                try {
                    return Promise.resolve(window.prompt(message, defaultValue));
                } catch (e) {
                    console.warn('Native prompt failed, using custom dialog:', e);
                }
            }
            return this.createDialog('prompt', message, defaultValue);
        }
    };

    // ===== 错误处理和日志系统 =====
    const ErrorHandler = {
        logs: [],
        maxLogs: 100,

        log: function(level, message, data) {
            const logEntry = {
                timestamp: new Date().toISOString(),
                level: level,
                message: message,
                data: data,
                userAgent: navigator.userAgent
            };

            this.logs.push(logEntry);
            if (this.logs.length > this.maxLogs) {
                this.logs.shift();
            }

            // 尝试输出到控制台
            try {
                console[level] && console[level](message, data);
            } catch (e) {
                // 控制台不可用时静默失败
            }
        },

        error: function(message, data) {
            this.log('error', message, data);
        },

        warn: function(message, data) {
            this.log('warn', message, data);
        },

        info: function(message, data) {
            this.log('info', message, data);
        },

        getLogs: function() {
            return this.logs.slice();
        },

        clearLogs: function() {
            this.logs = [];
        }
    };

    // ===== Android WebView特定兼容性处理 =====
    const AndroidWebViewCompat = {
        // 检测是否在Android WebView中运行
        isAndroidWebView: function() {
            const ua = navigator.userAgent;
            return ua.includes('Android') && ua.includes('wv');
        },
        
        // 强制刷新localStorage（解决Android WebView数据同步问题）
        forceStorageSync: function() {
            if (this.isAndroidWebView()) {
                try {
                    // 触发storage事件以确保数据同步
                    const event = new StorageEvent('storage', {
                        key: 'forceSync',
                        newValue: Date.now().toString(),
                        storageArea: localStorage
                    });
                    window.dispatchEvent(event);
                } catch (e) {
                    console.warn('Force storage sync failed:', e);
                }
            }
        },
        
        // 优化的数据存储方法
        setItemWithSync: function(key, value) {
            const success = StorageCompat.setItem(key, value);
            if (success && this.isAndroidWebView()) {
                // 延迟触发同步事件
                setTimeout(() => {
                    this.forceStorageSync();
                }, 50);
            }
            return success;
        },
        
        // 数据一致性检查
        validateDataConsistency: function() {
            if (!this.isAndroidWebView()) return true;
            
            try {
                // 检查关键数据的一致性
                const testKey = '__consistency_test__';
                const testValue = Date.now().toString();
                
                StorageCompat.setItem(testKey, testValue);
                const retrieved = StorageCompat.getItem(testKey);
                StorageCompat.removeItem(testKey);
                
                return retrieved === testValue;
            } catch (e) {
                console.warn('Data consistency check failed:', e);
                return false;
            }
        }
    };
    
    // 导出兼容性工具
    window.WebViewCompat.storage = StorageCompat;
    window.WebViewCompat.vibration = VibrationCompat;
    window.WebViewCompat.audio = AudioCompat;
    window.WebViewCompat.mediaQuery = MediaQueryCompat;
    window.WebViewCompat.dialog = DialogCompat;
    window.WebViewCompat.errorHandler = ErrorHandler;
    window.WebViewCompat.android = AndroidWebViewCompat;

    // 全局错误处理
    window.addEventListener('error', function(event) {
        ErrorHandler.error('Global error:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            error: event.error
        });
    });

    window.addEventListener('unhandledrejection', function(event) {
        ErrorHandler.error('Unhandled promise rejection:', {
            reason: event.reason
        });
    });

    console.log('WebView兼容性工具库已加载');

})(window);