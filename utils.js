// 通用工具函数库
// 避免在多个文件中重复定义相同的函数

// 页面导航工具函数
window.NavigationUtils = {
    // 统一的页面导航函数
    navigateToPage: function(page, params = '') {
        const fullPage = page + params;
        
        // 如果在iframe中，向父窗口发送消息
        if (window.parent !== window) {
            window.parent.postMessage({ action: 'navigate', page: page, params: params }, '*');
        } else {
            // 直接导航
            window.location.href = page + '.html' + params;
        }
    },
    
    // 在主页面中处理导航消息
    handleNavigationMessage: function(event) {
        if (event.data && event.data.action === 'navigate') {
            const page = event.data.page;
            const params = event.data.params || '';
            
            // 调用主页面的导航函数
            if (typeof navigateToPage === 'function') {
                navigateToPage(page, params);
            }
        }
    }
};

// 题目格式转换工具函数
window.QuestionUtils = {
    // 统一的题目格式转换函数
    convertQuestionFormat: function(question, questionType = '单选题') {
        // 只对单选题使用correctAnswers/wrongAnswers格式进行转换
        if (question.correctAnswers && question.wrongAnswers && questionType === '单选题') {
            // 创建选项数组，并记录每个选项是否为正确答案
            const optionsWithCorrectness = [];
            
            // 添加正确答案
            question.correctAnswers.forEach(answer => {
                optionsWithCorrectness.push({ text: answer, isCorrect: true });
            });
            
            // 添加错误答案
            question.wrongAnswers.forEach(answer => {
                optionsWithCorrectness.push({ text: answer, isCorrect: false });
            });
            
            // 随机打乱选项顺序
            for (let i = optionsWithCorrectness.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [optionsWithCorrectness[i], optionsWithCorrectness[j]] = [optionsWithCorrectness[j], optionsWithCorrectness[i]];
            }
            
            // 提取选项文本和正确答案索引
            const options = optionsWithCorrectness.map(item => item.text);
            const correctIndexes = [];
            optionsWithCorrectness.forEach((item, index) => {
                if (item.isCorrect) {
                    correctIndexes.push(index);
                }
            });
            
            // 对于单选题，correct应该是单个数字，不是数组
            const correct = questionType === '单选题' ? correctIndexes[0] : correctIndexes;
            
            return {
                ...question,
                options: options,
                correct: correct
            };
        }
        
        // 对于其他格式的题目，直接返回
        return question;
    }
};

// 音效播放工具函数
window.AudioUtils = {
    // 播放正确答案音效
    playCorrectSound: function() {
        try {
            if (window.webviewCompat && window.webviewCompat.audio) {
                window.webviewCompat.audio.playTone(800, 200, 'sine');
            } else {
                // 浏览器环境下的音效
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
            }
        } catch (error) {
            console.log('音效播放失败:', error);
        }
    },
    
    // 播放错误答案音效
    playWrongSound: function() {
        try {
            if (window.webviewCompat && window.webviewCompat.audio) {
                window.webviewCompat.audio.playTone(300, 300, 'sawtooth');
            } else {
                // 浏览器环境下的音效
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                oscillator.type = 'sawtooth';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }
        } catch (error) {
            console.log('音效播放失败:', error);
        }
    }
};

// 在页面加载时设置消息监听器
if (window.addEventListener) {
    window.addEventListener('message', window.NavigationUtils.handleNavigationMessage, false);
}