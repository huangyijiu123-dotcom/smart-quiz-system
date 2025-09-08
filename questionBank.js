// 题库管理系统
// 包含单选题、多选题和判断题的完整题库

// 单选题题库
const singleChoiceQuestions = [
                                   {
                    id: 1,
                    question: "职业道德是从事一定职业的人们在职业活动过程中所应遵循的（）和行为规范的总和",
                    correctAnswers: ["道德原则"],
                    wrongAnswers: ["政治义务", "职业守则", "立法制约"],
                },
                {
                    id: 2,
                    question: "职业道德是一种内在的（）的约束机制。",
                    correctAnswers: ["非强制性"],
                    wrongAnswers: ["强制性", "随意性", "自发性"],
                },
                {
                    id: 3,
                    question: "下列选项中，属于新的职业道德观念的核心理念是（）",
                    correctAnswers: ["服务意识"],
                    wrongAnswers: ["尽忠职守", "公德意识", "劳动技术"],
                },
                {
                    id: 4,
                    question: "下列选项中，不属于职业道德具有的特征是（）",
                    correctAnswers: ["行业的多样性"],
                    wrongAnswers: ["范围的有限性", "内容的稳定性和连续性", "形式的多样性"],
                },
                {
                    id: 5,
                    question: "增强职业道德，可以（）增强企业内部凝聚力。",
                    correctAnswers: ["协调员工之间的关系"],
                    wrongAnswers: ["增加员工福利", "为员工创造发展空间", "调节企业与社会的关系"],
                },
                {
                    id: 6,
                    question: "职业道德不能通过（）的关系，增强企业的凝聚力。",
                    correctAnswers: ["调节企业与市场"],
                    wrongAnswers: ["协调企业职工间", "调节领导与职工", "协调职工与企业"],
                },
                {
                    id: 7,
                    question: "下列关于职业道德的说法中，正确的是（）。",
                    correctAnswers: ["职业道德从一个侧面反映人的整体道德素质"],
                    wrongAnswers: ["职业道德与人格无关", "职业道德的养成只能靠教化", "职业道德只能靠制度规约"],
                },
                {
                    id: 8,
                    question: "朱熹指出的'专心致志，以事其业'说的是（）",
                    correctAnswers: ["敬业精神"],
                    wrongAnswers: ["奉献精神", "公仆意识", "意志品质"],
                },
                {
                    id: 9,
                    question: "团结进取的基本要求不包括（）",
                    correctAnswers: ["保护环境"],
                    wrongAnswers: ["加强协作", "顾全大局", "平等尊重"],
                },
                {
                    id: 10,
                    question: "在下列选项中，符合办事公道规范的有（）。",
                    correctAnswers: ["秉公执法，不徇私情"],
                    wrongAnswers: ["顾全大局、服从上级", "知人善任、培养亲信", "公私不分，一切平等"],
                },
                {
                    id: 11,
                    question: "下列符合遵纪守法要求的做法不包括（）",
                    correctAnswers: ["在楼下没人的时候可以高空抛物"],
                    wrongAnswers: ["遵守法律法规", "遵守行为规范", "遵守所在机构的规章制度"],
                },
                {
                    id: 12,
                    question: "职业纪律是最明确的职业规范，它以（）的方式规定职业活动中对从业人员的基本要求。",
                    correctAnswers: ["道德规范"],
                    wrongAnswers: ["自律", "办法", "习俗"],
                },
                {
                    id: 13,
                    question: "安全操作的基本要求不包括（）",
                    correctAnswers: ["爱岗敬业"],
                    wrongAnswers: ["高度重视", "严格检查", "强化责任"],
                },
                {
                    id: 14,
                    question: "生产经营单位应当在有较大危险因素的生产经营场所和有关设施、设备上，设置明显的（）。",
                    correctAnswers: ["安全警示标志"],
                    wrongAnswers: ["安全宣传标语", "安全宣传挂图", "安全说明"],
                },
                {
                    id: 15,
                    question: "以下不是安全生产检查的方式是（）。",
                    correctAnswers: ["经验检查法"],
                    wrongAnswers: ["常规检查", "安全检查表法", "仪器检查法"],
                },
                {
                    id: 16,
                    question: "诚实守信的基本要求不包括（）。",
                    correctAnswers: ["积极进取"],
                    wrongAnswers: ["保密守信", "不搞虚假", "忠于职守"],
                },
                {
                    id: 17,
                    question: "做人之本，立事之基，为政之根是（）。",
                    correctAnswers: ["诚实守信"],
                    wrongAnswers: ["服务群众", "爱岗敬业", "办事公道"],
                },
                {
                    id: 18,
                    question: "诸葛亮的“鞠躬尽瘁，死而后己”，《淮南子》中的“公正无私，一言而万民齐”，范仲淹所说的“先天下之忧而忧，后天下之乐而乐”，体现了传统文明继承的职业道德精华，即（）",
                    correctAnswers: ["忠诚和奉献精神"],
                    wrongAnswers: ["积极进取精神", "勤俭节约精神", "艰苦奋斗精神"],
                },
                {
                    id: 19,
                    question: "'佛山陶瓷'不是体现工匠精神的典型特征是（）",
                    correctAnswers: ["顾客为主"],
                    wrongAnswers: ["精益求精", "品牌意识", "不断创新"],
                },
                {
                    id: 20,
                    question: "显示器的（）指标越高，显示的图像越清晰。",
                    correctAnswers: ["分辨率"],
                    wrongAnswers: ["对比度", "刷新频率", "亮度"],
                },
                {
                    id: 21,
                    question: "一个完整的计算机系统是除了硬件系统，还包括（）组成。",
                    correctAnswers: ["软件系统"],
                    wrongAnswers: ["操作系统", "输入输出设备", "中央处理器"],
                },
                {
                    id: 22,
                    question: "单处理机计算机系统中，（）是并行操作的。",
                    correctAnswers: ["处理机操作和通道操作"],
                    wrongAnswers: ["程序与程子程序", "用户程序与操作系统程序", "操作系统与软件系统"],
                },
                {
                    id: 23,
                    question: "与计算机硬件关系最密切的软件的是（）。",
                    correctAnswers: ["操作系统"],
                    wrongAnswers: ["编译程序", "数据库管理程序", "软件系统"],
                },
                {
                    id: 24,
                    question: "计算机网络的主要功能目的是实现计算机之间的资源共享，以下选项不属于资源共享的是（）。",
                    correctAnswers: ["网络资源共享"],
                    wrongAnswers: ["硬件资源共享", "软件资源共享", "数据资源贡献"],
                },
                {
                    id: 25,
                    question: "网络传输介质中，抗干扰能力最强的是以下选项()",
                    correctAnswers: ["光纤"],
                    wrongAnswers: ["微波", "双绞线", "同轴电缆"],
                },
                {
                    id: 26,
                    question: "以下属于是网关的基本功能（）。",
                    correctAnswers: ["解析数据包"],
                    wrongAnswers: ["信息安全", "数据重新分组", "简单指令计算"],
                },
                {
                    id: 27,
                    question: "计算机安全所涵盖的内容从技术上不包括（）",
                    correctAnswers: ["用电安全"],
                    wrongAnswers: ["实体安全", "系统安全", "信息安全"],
                },
                {
                    id: 28,
                    question: "关于计算机病毒，以下选项是正确的描述（）",
                    correctAnswers: ["计算机病毒是一种人为特制的具有破坏性的程序"],
                    wrongAnswers: ["计算机病毒可以烧毁计算机的电子元件", "计算机病毒是一种传染力极强的生物细菌", "计算机病毒一旦产生便无法清除"],
                },
                {
                    id: 29,
                    question: "下列关于数据库的叙述中，正确的是（）。",
                    correctAnswers: ["数据库减少了数据冗余"],
                    wrongAnswers: ["数据库避免了数据冗余", "数据库中的数据一致性是指数据类型一致", "数据库系统比文件系统能够管理更多数据"],
                },
                {
                    id: 30,
                    question: "视图是从一个或多个表中或视图中导出的（）",
                    correctAnswers: ["表"],
                    wrongAnswers: ["查询", "报表", "数据"],
                },
                {
                    id: 31,
                    question: "Oracle中，用于限制分组函数的返回值的子句是()",
                    correctAnswers: ["having"],
                    wrongAnswers: ["where", "orderby", "select"],
                },
                {
                    id: 32,
                    question: "Linux中权限最大的账户是（）。",
                    correctAnswers: ["root"],
                    wrongAnswers: ["admin", "guest", "super"],
                },
                {
                    id: 33,
                    question: "计算机的主要性能指标有主频、字长、内存容量及其他指标，其中主频是指计算机CPU在单位时间内输出的（）。",
                    correctAnswers: ["脉冲数"],
                    wrongAnswers: ["字节数", "位数", "指令"],
                },
                {
                    id: 34,
                    question: "下列硬件中，不用安装驱动程序即可工作的是（）",
                    correctAnswers: ["硬盘"],
                    wrongAnswers: ["显卡", "声卡", "网卡"],
                },
                {
                    id: 35,
                    question: "不属于计算机系统的软件故障（）",
                    correctAnswers: ["人为破坏"],
                    wrongAnswers: ["系统故障", "程序故障", "病毒故障"],
                },
                {
                    id: 36,
                    question: "键盘中CapsLock键的作用是（）。",
                    correctAnswers: ["用于大小写字母转换"],
                    wrongAnswers: ["用于取消前一时刻不当操作或退出某种状态", "用于将光标向右跳过8个字节的位置", "切换输入时插入、改写状态"],
                },
                {
                    id: 37,
                    question: "运算器的组成部分不包括以下选项（）",
                    correctAnswers: ["译码器"],
                    wrongAnswers: ["控制线路", "加法器", "寄存器"],
                },
                {
                    id: 38,
                    question: "WPS是一种（）软件。",
                    correctAnswers: ["文字处理"],
                    wrongAnswers: ["游戏", "图形处理", "工程设计"],
                },
                {
                    id: 39,
                    question: "如果希望将幻灯片由横排变为竖排，需要更换（）",
                    correctAnswers: ["版式"],
                    wrongAnswers: ["设计模版", "背景", "幻灯片切换"],
                },
                {
                    id: 40,
                    question: "WPS表格的主要功能不包括（）。",
                    correctAnswers: ["计算器"],
                    wrongAnswers: ["电子表格", "图表", "数据库"],
                },
                {
                    id: 41,
                    question: "微博、博客等自媒体平台让普通大众具有了更多话语权，信息发布更加方便。以下关于自媒体平台描述不正确的是（）。",
                    correctAnswers: ["只有加关注的人发布的信息才可以被自己看到"],
                    wrongAnswers: ["能发布自己的信息，也能转载他人的信息", "能通过跟帖或回复与他人进行交流", "传播、制造虚假信息，会被追究法律责任"],
                },
                {
                    id: 42,
                    question: "以下选项不属于即时通讯软件（）。",
                    correctAnswers: ["Xmind"],
                    wrongAnswers: ["钉钉", "微信", "飞书"],
                },
                {
                    id: 43,
                    question: "计算机病毒可以分为系统病毒、蠕虫病毒、木马病毒以及脚本病毒等，其中木马病毒的前缀是（）",
                    correctAnswers: ["Trojian"],
                    wrongAnswers: ["Worm", "Scrip", "Backdoor"],
                },
                {
                    id: 44,
                    question: "以下选项不属于计算机病毒特征（）",
                    correctAnswers: ["免疫性"],
                    wrongAnswers: ["潜伏性", "传染性", "激发性"],
                },
                {
                    id: 45,
                    question: "计算机浏览器的窗口组成部分不包括（）。",
                    correctAnswers: ["编辑栏"],
                    wrongAnswers: ["标题栏", "菜单栏", "工具栏"],
                },
                {
                    id: 46,
                    question: "浏览器模式改为兼容模式的操作是以下选项（）",
                    correctAnswers: ["点击'兼容性视图设置'选项"],
                    wrongAnswers: ["点击书签选项", "点击常规选项", "点击收藏选项"],
                },
                {
                    id: 47,
                    question: "在百度网站上搜索歌曲“我爱我的祖国”，那么输入的文字称为（）",
                    correctAnswers: ["关键词"],
                    wrongAnswers: ["目录名称", "网页名称", "歌曲名称"],
                },
                {
                    id: 48,
                    question: "搜索引擎是指根据一定的（）、运用特定的计算机程序从互联网上搜集信息，为用户提供检索服务。",
                    correctAnswers: ["策略"],
                    wrongAnswers: ["目录", "选项卡", "字体"],
                },
                {
                    id: 49,
                    question: "不属于搜索引擎涉及的搜索方式是（）。",
                    correctAnswers: ["直接搜索"],
                    wrongAnswers: ["全文索引", "目录索引", "集合氏搜索引擎"],
                },
                {
                    id: 50,
                    question: "每个电子邮件服务器之上都可以开设多个电子邮件，电子邮箱也称之为（）地址。",
                    correctAnswers: ["E-mail"],
                    wrongAnswers: ["用户", "接收", "IP"],
                },
                {
                    id: 51,
                    question: "不属于常用的电子邮箱的是（）",
                    correctAnswers: ["迅雷"],
                    wrongAnswers: ["126邮箱", "163邮箱", "189邮箱"],
                },
                {
                    id: 52,
                    question: "光纤传输是以（）为介质进行的数据、信号传输。",
                    correctAnswers: ["光导纤维"],
                    wrongAnswers: ["中继器", "玻璃丝", "填充物"],
                },
                {
                    id: 53,
                    question: "CUteFTP具有网际快车不具备的功能是以下选项()",
                    correctAnswers: ["视频播放"],
                    wrongAnswers: ["下载文件", "断点续传", "上传文件"],
                },
                {
                    id: 54,
                    question: "处理和播放多媒体声音的关键部件是（）。",
                    correctAnswers: ["声卡"],
                    wrongAnswers: ["显卡", "适配器", "显示器"],
                },
                {
                    id: 55,
                    question: "以下选项不属于多媒体的范畴（）。",
                    correctAnswers: ["手绘画报"],
                    wrongAnswers: ["交互式视频游戏", "电子图书", "立体声乐"],
                },
                {
                    id: 56,
                    question: "以下选项不属于多媒体播放工具的是（）。",
                    correctAnswers: ["WinRAR"],
                    wrongAnswers: ["暴风影音", "千千静听", "Realone Player"],
                },
                {
                    id: 57,
                    question: "公司安排员工春节期间上班，根据劳动法，该公司方法其不低于原工资报酬的（）。",
                    correctAnswers: ["300%"],
                    wrongAnswers: ["150%", "200%", "400%"],
                },
                {
                    id: 58,
                    question: "以下选项不属于劳动者的权利（）。",
                    correctAnswers: ["专利分享的权利"],
                    wrongAnswers: ["取得劳动薪酬的权利", "享有社会保险的福利的权利", "提请劳动争议处理的权利"],
                },
                {
                    id: 59,
                    question: "网络运营者应为（）、国家安全机关依法维护国家安全和侦察犯罪的活动提供技术支持和协助。",
                    correctAnswers: ["公安机关"],
                    wrongAnswers: ["网信部门", "工信部门", "检察院"],
                },
                {
                    id: 60,
                    question: "国家支持网络运营者之间在网络安全信息不在以下（）方面进行合作，提高网络运营者的安全保障能力。",
                    correctAnswers: ["机密"],
                    wrongAnswers: ["分析", "应急处置", "收集"],
                },
                {
                    id: 61,
                    question: "软件著作权人，是指依照条例的，对软件享有（）的自然人、法人或者其他组织。",
                    correctAnswers: ["著作权"],
                    wrongAnswers: ["修改权", "管理权", "开发权"],
                },
                {
                    id: 62,
                    question: "依据《计算机软件保护条例》，软件著作人享有的权利不包含（）。",
                    correctAnswers: ["占用权"],
                    wrongAnswers: ["发表权", "复制权", "修改权"],
                },
                {
                    id: 63,
                    question: "以下选项关于从事国际联网经营活动的接入单位条件不正确的是（）。",
                    correctAnswers: ["自行使用其他信道进行国际联网"],
                    wrongAnswers: ["依法设立企业法人", "具有健全的安全保密制度", "符合法律和国务院规定"],
                },
                {
                    id: 64,
                    question: "互联网可行性报告的主要内容不包括（）。",
                    correctAnswers: ["网络完全规则"],
                    wrongAnswers: ["网络服务性质和范围", "网络技术方案", "管理办法"],
                },
                {
                    id: 65,
                    question: "ETL不仅仅是对一个企业部门、一个应用系统数据的简单整理，还是跨部门、跨（）的数据整合处理。",
                    correctAnswers: ["系统"],
                    wrongAnswers: ["业务", "流程", "产品"],
                },
                {
                    id: 66,
                    question: "ETL在企业数据模型的基础上，构建合理的数据存储模式，建立企业的数据（）平台。",
                    correctAnswers: ["交换"],
                    wrongAnswers: ["模式", "标准", "规则"],
                },
                {
                    id: 67,
                    question: "Oracle Goldengate没有图形化界面，操作皆为（）方式，可配置能力差。",
                    correctAnswers: ["命令行"],
                    wrongAnswers: ["交互式", "输入式", "手动式"],
                },
                {
                    id: 68,
                    question: "Kettle开发和生产环境需要独立部署，任务的（）不在本地。",
                    correctAnswers: ["更改"],
                    wrongAnswers: ["编写", "调试", "修改"],
                },
                {
                    id: 69,
                    question: "Ketle的CDC机制是基于（）触发器等，以下选项是正确的。",
                    correctAnswers: ["时间戳"],
                    wrongAnswers: ["日志", "序列", "架构"],
                },
                {
                    id: 70,
                    question: "DataPipeline的CDC机制是基于多种选择方式，以下方式不属于（）。",
                    correctAnswers: ["分配"],
                    wrongAnswers: ["日志", "时间戳", "自增序列"],
                },
                {
                    id: 71,
                    question: "ETL数据整合的主流工具中不需要开发的为（）",
                    correctAnswers: ["DataPipeline"],
                    wrongAnswers: ["Kettle", "Oracle Goldengate", "lnformatica"],
                },
                {
                    id: 72,
                    question: "Kettle依赖（）定位故障问题，属于后处理的方式，缺少过程预警。",
                    correctAnswers: ["日志"],
                    wrongAnswers: ["时间戳", "架构", "配置"],
                },
                {
                    id: 73,
                    question: "Kettle的最大优势是其（）的特性。",
                    correctAnswers: ["开源"],
                    wrongAnswers: ["易安装", "易操作", "图形化"],
                },
                {
                    id: 74,
                    question: "转换组件是针对数据记录进行处理的组件，是以（）为处理对象，使用某种处理方法的组件。",
                    correctAnswers: ["每个记录"],
                    wrongAnswers: ["每个字段", "每个分组", "每个文件"],
                },
                {
                    id: 75,
                    question: "ETL中三个字母分别代表（），以下选项不正确的。",
                    correctAnswers: ["Transimit"],
                    wrongAnswers: ["Extract", "Transform", "Load"],
                },
                {
                    id: 76,
                    question: "用来读取不同文本文件中的数据，大多是符合约定格式的TXT文件的组件名称为（）。",
                    correctAnswers: ["文本文件输入"],
                    wrongAnswers: ["表输入", "CSV文件输入", "XML输入"],
                },
                {
                    id: 77,
                    question: "生成行组件输出一定数量的（），默认为空，以下选项是正确的。",
                    correctAnswers: ["行"],
                    wrongAnswers: ["列", "字段", "数字"],
                },
                {
                    id: 78,
                    question: "以下选项中，不属于ETL任务执行的主要内容的为()",
                    correctAnswers: ["仅对成功的信息发出提示"],
                    wrongAnswers: ["任务流程的依赖关系", "调度算法和策略", "对成功或失败的信息发出提示"],
                },
                {
                    id: 79,
                    question: "在ETL中，任务的调度算法采取（）的策略进行任务调度，以下选项是正确的。",
                    correctAnswers: ["条件驱动"],
                    wrongAnswers: ["信息抽取", "数据转换", "数据加工"],
                },
                {
                    id: 80,
                    question: "ETL是通过建立（）进行数据整合和处理的，以下选项不正确的。",
                    correctAnswers: ["任务依赖关系"],
                    wrongAnswers: ["任务流程", "设置时间调度", "调用相应的转换任务"],
                },
                {
                    id: 81,
                    question: "网络爬虫是一种按照一定规则，自动地抓取网页信息的（）",
                    correctAnswers: ["程序"],
                    wrongAnswers: ["装置", "网址", "数据文件"]
                },
                {
                    id: 82,
                    question: "数据埋点是一种良好的（）部署数据采集方式。",
                    correctAnswers: ["私有化"],
                    wrongAnswers: ["公有化", "公开化", "自助式"]
                },
                {
                    id: 83,
                    question: "数据整合建立转换工程是在（）中最先进行操作的。",
                    correctAnswers: ["Kettle"],
                    wrongAnswers: ["DataPipeline", "Oracle Goldengate", "Informatica"]
                },
                {
                    id: 84,
                    question: "以下不属于数据整合解决方案的是（）。",
                    correctAnswers: ["数据爬虫"],
                    wrongAnswers: ["ETL工具", "数据仓库", "数据虚拟化"]
                },
                {
                    id: 85,
                    question: "在转换工程过程中，主要进行的操作是对转换工作进行设置，以下选项描述不正确的（）。",
                    correctAnswers: ["函数"],
                    wrongAnswers: ["设置转换工程的名称", "命名参数", "日志"]
                },
                {
                    id: 86,
                    question: "转换主要是针对（）的各种处理，一个转换可以包含多个组件。",
                    correctAnswers: ["数据"],
                    wrongAnswers: ["组件", "记录", "文本"]
                },
                {
                    id: 87,
                    question: "用于抽取数据库的数据组件不包括（）。",
                    correctAnswers: ["Python"],
                    wrongAnswers: ["Oracle", "MS SQLServer", "IBMDB2"]
                },
                {
                    id: 88,
                    question: "以下选项不属于衡量数据质量的指标的是（）。",
                    correctAnswers: ["局部性"],
                    wrongAnswers: ["关联度", "时效性", "可信性"]
                },
                {
                    id: 89,
                    question: "以下选项不是标注数据采集的采集样例（）。",
                    correctAnswers: ["指令采集"],
                    wrongAnswers: ["人体姿势采集", "方言采集", "停车位采集"]
                },
                {
                    id: 90,
                    question: "数据预处理是一种（）技术。",
                    correctAnswers: ["数据挖掘"],
                    wrongAnswers: ["数据清洗", "数据分类", "数据整理"]
                },
                {
                    id: 91,
                    question: "以下选项不是数据预处理的方式是（）。",
                    correctAnswers: ["数据分类"],
                    wrongAnswers: ["数据清洗", "数据集成", "数据归约"]
                },
                {
                    id: 92,
                    question: "在各种数据清洗异常中，（）是指表示实体的具体数据的值和格式的错误。",
                    correctAnswers: ["语法类异常"],
                    wrongAnswers: ["语义类异常", "覆盖率异常", "数据中出现的矛盾"]
                },
                {
                    id: 93,
                    question: "不属于语法类异常的是（）",
                    correctAnswers: ["覆盖率异常"],
                    wrongAnswers: ["语法错误", "值域格式错误", "不规则取值"]
                },
                {
                    id: 94,
                    question: "在数据预处理过程中，对缺失值的处理方法不正确的是（）。",
                    correctAnswers: ["删除当前字段"],
                    wrongAnswers: ["同类均值插补", "极大似然估计", "均值插补"]
                },
                {
                    id: 95,
                    question: "数据的属性可以是（）或定量的数据。",
                    correctAnswers: ["定性"],
                    wrongAnswers: ["定价", "规定", "处理"]
                },
                {
                    id: 96,
                    question: "删除含有缺失值的记录的方法（）。",
                    correctAnswers: ["简单删除法"],
                    wrongAnswers: ["加和法", "平均法", "乘积法"]
                },
                {
                    id: 97,
                    question: "噪声数据处理过程中，（）是通过考察数据的周围值来光滑有序的数据值。",
                    correctAnswers: ["分箱"],
                    wrongAnswers: ["回归", "离群点分析", "函数拟合"]
                },
                {
                    id: 98,
                    question: "数据特征归约的原则是在保留数据判别能力的同时（）特征向量的维度。",
                    correctAnswers: ["减少"],
                    wrongAnswers: ["增加", "记录", "去除"]
                },
                {
                    id: 99,
                    question: "特征归约算法的输入是一组（）。",
                    correctAnswers: ["特征值"],
                    wrongAnswers: ["变量值", "记录值", "规约值"]
                },
                {
                    id: 100,
                    question: "特征归约一般步骤不包括（）。",
                    correctAnswers: ["集成过程"],
                    wrongAnswers: ["搜索过程", "评估过程", "分类过程"]
                },
                {
                    id: 101,
                    question: "样本归约是指从数据集中选出一个有代表性的样本（）。",
                    correctAnswers: ["子集"],
                    wrongAnswers: ["并集", "交集", "合集"]
                },
                {
                    id: 102,
                    question: "确定样本子集的大小不需要考虑（）。",
                    correctAnswers: ["模型选型"],
                    wrongAnswers: ["计算成本", "估计量精度", "数据质量"]
                },
                {
                    id: 103,
                    question: "数据归约是指在尽可能保持数据原貌的前提下，最大限度地精简数据量，（）就是特征值离散化技术。",
                    correctAnswers: ["特征值规约"],
                    wrongAnswers: ["特征规约", "字段规约", "样本规约"]
                },
                {
                    id: 104,
                    question: "无参的特征值归约不包含（）",
                    correctAnswers: ["条形图"],
                    wrongAnswers: ["直方图", "选样", "聚类"]
                },
                {
                    id: 105,
                    question: "在数据变化过程中，（）是指去除数据中的噪声，可采用分箱的方式进行数据平滑。",
                    correctAnswers: ["数据平滑"],
                    wrongAnswers: ["数据聚类", "数据泛化", "属性构造"]
                },
                {
                    id: 106,
                    question: "数据变换是将数据从一种表示形式变换为适用于（）的另一种形式的过程。",
                    correctAnswers: ["数据挖掘"],
                    wrongAnswers: ["数据泛化", "数据规范", "数据提取"]
                },
                {
                    id: 107,
                    question: "剪枝是决策树学习算法对付（）的主要手段。",
                    correctAnswers: ["过拟合"],
                    wrongAnswers: ["欠拟合", "噪声", "缺失值"]
                },
                {
                    id: 108,
                    question: "预剪枝使得决策树很多分支没有展开，这不仅降低了过拟合风险，还显著减少了决策树的（）开销。",
                    correctAnswers: ["训练时间"],
                    wrongAnswers: ["划分时间", "归类时间", "抽样时间"]
                },
                {
                    id: 109,
                    question: "以下选项不属于大数据技术设计的特征的是（）。",
                    correctAnswers: ["结构复杂"],
                    wrongAnswers: ["负载均衡", "分散处理", "副本存储"]
                },
                {
                    id: 110,
                    question: "在大数据线下采集过程中，通过使用（）来测试物品的温度、温度和电压来获取数据。",
                    correctAnswers: ["传感器"],
                    wrongAnswers: ["磁卡片", "网络媒体", "日志"]
                },
                {
                    id: 111,
                    question: "线下采集指通过（）、磁卡片、FRID等装置或技术，获取用户的线下行为数据。",
                    correctAnswers: ["传感器"],
                    wrongAnswers: ["遥感", "自动机", "计算器"]
                },
                {
                    id: 112,
                    question: "以下选项不属于数据采集系统覆盖范围（）。",
                    correctAnswers: ["数据处理"],
                    wrongAnswers: ["数据生产", "数据采集", "数据收集"]
                },
                {
                    id: 113,
                    question: "在大数据处理过程中，目前主流的数据处理模式是（）处理模式和流处理模式。",
                    correctAnswers: ["批"],
                    wrongAnswers: ["分段", "触发", "中控"]
                },
                {
                    id: 114,
                    question: "数据采集系统通常包括数据生成、（）、数据处理、数据存储四个部分。",
                    correctAnswers: ["数据采集"],
                    wrongAnswers: ["数据开发", "数据分析", "数据建模"]
                },
                {
                    id: 115,
                    question: "数据采集又称数据抽取，分为（）抽取和增量抽取。",
                    correctAnswers: ["全量"],
                    wrongAnswers: ["部分", "筛选", "偏好"]
                },
                {
                    id: 116,
                    question: "数据采集系统通常不包括以下部分（）。",
                    correctAnswers: ["数据分析"],
                    wrongAnswers: ["数据生产", "数据采集", "数据处理"]
                },
                {
                    id: 117,
                    question: "以下选项中不属于混合精度训练时避免精度损失的方法是（）。",
                    correctAnswers: ["压缩矩阵"],
                    wrongAnswers: ["保留权重的单精度副本", "损失定标", "改进的精度算法"]
                },
                {
                    id: 118,
                    question: "半精度浮点数在内存中占用（）个字节进行存储。",
                    correctAnswers: ["2"],
                    wrongAnswers: ["1", "4", "8"]
                },
                {
                    id: 119,
                    question: "业务流程优化的目的是（）。",
                    correctAnswers: ["保持企业的竞争优势"],
                    wrongAnswers: ["通过不断发展、完善、优化业务", "对现有工作流程的梳理和完善", "对原来的业务流程做彻底的重新设计"]
                },
                {
                    id: 120,
                    question: "业务流程优化是指从根本上对原来的业务流程做彻底地重新设计，把直线职能型的结构转变成（）流程网络结构。",
                    correctAnswers: ["平行"],
                    wrongAnswers: ["交叉", "汇聚", "业务"]
                },
                {
                    id: 121,
                    question: "流程优化是一项（），通过不断发展、完善、优化业务流程保持企业的竞争优势。",
                    correctAnswers: ["策略"],
                    wrongAnswers: ["规则", "业务", "制度"]
                },
                {
                    id: 122,
                    question: "以下不属于流程优化的主要途径（）。",
                    correctAnswers: ["需求变更"],
                    wrongAnswers: ["设备更新", "材料替代", "时序调整"]
                },
                {
                    id: 123,
                    question: "以下不属于流程优化策略的是（）。",
                    correctAnswers: ["评价"],
                    wrongAnswers: ["绩效", "过程", "战略"]
                },
                {
                    id: 124,
                    question: "以下选项不属于业务流程优化的预期收益（）",
                    correctAnswers: ["减少流程环节，提升效率"],
                    wrongAnswers: ["核心业务、管理流程清晰、简洁，工作效率提高", "工作方法优化，提高了工作质量与效率", "流程顺畅，无效劳动减少成本降低"]
                },
                {
                    id: 125,
                    question: "数据标注的基本流程不包含（）。",
                    correctAnswers: ["数据分析"],
                    wrongAnswers: ["数据采集", "数据清洗", "数据标注"]
                },
                {
                    id: 126,
                    question: "（）是整个数据采集标注基本流程的首要环节。",
                    correctAnswers: ["数据采集"],
                    wrongAnswers: ["数据标注", "数据清洗", "数据分类"]
                },
                {
                    id: 127,
                    question: "以下选项为常用的数据质检方法，（）方法是多人做同一个子任务，通过数据标注工具的功能自动或人工辅助选择出最优的标准结果。",
                    correctAnswers: ["多人验证"],
                    wrongAnswers: ["埋题验证", "标注人员状态验证", "机器验证"]
                },
                {
                    id: 128,
                    question: "以下选项不是数据质检的方法（）",
                    correctAnswers: ["异常值检测"],
                    wrongAnswers: ["多人验证", "埋题验证", "标注人员验证"]
                },
                {
                    id: 129,
                    question: "文本数据标注作为最常见的数据标注分类之一，是指将文字、（）在内的文本行内容进行标注，使得计算机能够识别",
                    correctAnswers: ["符号"],
                    wrongAnswers: ["语音", "动画", "属性"]
                },
                {
                    id: 130,
                    question: "对于数据分类维度的表述，以下选项不正确的（）",
                    correctAnswers: ["时间"],
                    wrongAnswers: ["待标注数据类型", "标注方式", "行业"]
                },
                {
                    id: 131,
                    question: "以下标注方式不属于图像标注的是（）。",
                    correctAnswers: ["情感识别"],
                    wrongAnswers: ["点云标注", "视频追踪", "多边形标注"]
                },
                {
                    id: 132,
                    question: "（）必须在归档的标签候选集内。",
                    correctAnswers: ["数据标签"],
                    wrongAnswers: ["数据归约", "数据标注", "人工标注"]
                },
                {
                    id: 133,
                    question: "数据标注的构成形式不包括（）。",
                    correctAnswers: ["机器标注"],
                    wrongAnswers: ["结构化标注", "非结构化标注", "半结构化标注"]
                },
                {
                    id: 134,
                    question: "以下不属于数据分类的标注者类型的是（）。",
                    correctAnswers: ["音频标注"],
                    wrongAnswers: ["机器标注", "业余标注", "专业标注"]
                },
                {
                    id: 135,
                    question: "下列选项属于人工标注的特点是（）。",
                    correctAnswers: ["标注质量高"],
                    wrongAnswers: ["标注速度快", "标注成本低", "标注灵活性强"]
                },
                {
                    id: 136,
                    question: "以下选项不属于常见的数据标注方式（）",
                    correctAnswers: ["数据质检"],
                    wrongAnswers: ["点标注", "线标注", "3D点云标注"]
                },
                {
                    id: 137,
                    question: "下列选项中，关于数据标注叙述错误的是（）",
                    correctAnswers: ["不需要进行数据清洗即可进入数据标注环节"],
                    wrongAnswers: ["分类标注就是我们常见的打标签", "区域标注要求十分精确", "一些对于特征要求细致的应用中常常需要描点标注"]
                },
                {
                    id: 138,
                    question: "在数据标注运行模式中，以下选项是负责提出需求（）。",
                    correctAnswers: ["项目负责人"],
                    wrongAnswers: ["客户端", "需求端", "标注端"]
                },
                {
                    id: 139,
                    question: "数据标注的运行模式不包含（）。",
                    correctAnswers: ["客户端"],
                    wrongAnswers: ["需求端", "项目负责人", "标注端"]
                },
                {
                    id: 140,
                    question: "以下选项不属于数据标注的特点（）。",
                    correctAnswers: ["数据标注算法模型多"],
                    wrongAnswers: ["数据标注内容的颗粒度小", "数据标注需求量大", "数据标注需求迭代快"]
                },
                {
                    id: 141,
                    question: "目前，提高数据标注效率的最好方式是对待标注数据进行（）",
                    correctAnswers: ["预处理"],
                    wrongAnswers: ["数据分析", "数据建模", "数据建仓"]
                },
                {
                    id: 142,
                    question: "以下选项不属于产生多种数据采集方式与处理方式的原因的是（）。",
                    correctAnswers: ["数据具有保密性"],
                    wrongAnswers: ["数据来源丰富", "数据质量要求高", "存储与分析的数据量大"]
                },
                {
                    id: 143,
                    question: "目前日志数据采集系统不常用的是（）。",
                    correctAnswers: ["流式处理"],
                    wrongAnswers: ["采集技术", "数据分析技术", "数据采集系统架构"]
                },
                {
                    id: 144,
                    question: "在对数据进行标准化时，需要考虑数据特征，因为不同特征之间往往具有不同的（），会造成数值间分布差异较大。",
                    correctAnswers: ["量纲"],
                    wrongAnswers: ["分布", "单位", "标准"]
                },
                {
                    id: 145,
                    question: "不常见的数据变换方法是以下（）",
                    correctAnswers: ["函数转换"],
                    wrongAnswers: ["标准化", "离散化", "独热编码"]
                },
                {
                    id: 146,
                    question: "数据预处理方法不包括以下（）。",
                    correctAnswers: ["数据建模"],
                    wrongAnswers: ["数据清洗", "数据合并", "数据变换"]
                },
                {
                    id: 147,
                    question: "异常值是指样本中的个别值，其数值明显偏离所属样本的（）",
                    correctAnswers: ["观测值"],
                    wrongAnswers: ["测量值", "重复值", "更新值"]
                },
                {
                    id: 148,
                    question: "属于数据清洗的步骤（）。",
                    correctAnswers: ["以上都是"],
                    wrongAnswers: ["删除原始数据中无关数据", "删除原始数据中重复数据", "平滑噪声数据"]
                },
                {
                    id: 149,
                    question: "当进行数据预处理时有些数据值是被遗漏的，那么应该采用（）方法。",
                    correctAnswers: ["数据插补"],
                    wrongAnswers: ["删除", "数据变化", "数据标注"]
                },
                {
                    id: 150,
                    question: "以下选项是常用的数据插补方法（）。",
                    correctAnswers: ["以上都是"],
                    wrongAnswers: ["均值/中位数/众数插补", "使用固定值", "最近临插补"]
                },
                {
                    id: 151,
                    question: "如果训练过程中所使用的数据集存在大量（）将会导致机器学习训练不充分。",
                    correctAnswers: ["噪声"],
                    wrongAnswers: ["维度", "数据量", "字段"]
                },
                {
                    id: 152,
                    question: "在质量检验阶段，参与质量检验的人员包括",
                    correctAnswers: ["质量检验员"],
                    wrongAnswers: ["前台员工", "技术工人", "企业行政人员"]
                },
                {
                    id: 153,
                    question: "图像标注的本质是（）到语言表示化的过程。",
                    correctAnswers: ["视觉"],
                    wrongAnswers: ["色彩", "空间", "文件"]
                },
                {
                    id: 154,
                    question: "在语音标注的质量检验中，质检员时刻关注（）发音的时间轴与标注区域的音标是否相符。",
                    correctAnswers: ["语音数据"],
                    wrongAnswers: ["文本数据", "图像数据", "多媒体数据"]
                },
                {
                    id: 155,
                    question: "语音标注是标注员不断对语音信息进行（）。",
                    correctAnswers: ["翻译"],
                    wrongAnswers: ["分割", "瞄点", "合井"]
                },
                {
                    id: 156,
                    question: "不是语音标注需要了解的常规操作是（）。",
                    correctAnswers: ["合并"],
                    wrongAnswers: ["采样", "采样精度", "声道"]
                },
                {
                    id: 157,
                    question: "数据标注行业注重以下方面（）",
                    correctAnswers: ["高效"],
                    wrongAnswers: ["快捷", "简单", "实时"]
                },
                {
                    id: 158,
                    question: "数据标注就是使用计算机，按照（）的执行规范对各种各样的原始数据进行标注。",
                    correctAnswers: ["客户"],
                    wrongAnswers: ["数据标注员", "项目负责人", "采集人员"]
                },
                {
                    id: 159,
                    question: "以下选项不属于细胞标注的规则（）",
                    correctAnswers: ["细胞叠加时只需要标注一个"],
                    wrongAnswers: ["为每个细胞添加标签", "处理图片边缘的细胞体", "叠加的细胞一定要分清每个细胞的轮廓"]
                },
                {
                    id: 160,
                    question: "（）可采用方差选择法进行特征选择。",
                    correctAnswers: ["过滤式选择"],
                    wrongAnswers: ["子集搜索与评价", "包裹式选择", "嵌入式选择"]
                },
                {
                    id: 161,
                    question: "特征工程不包括以下步骤（）",
                    correctAnswers: ["特征描点"],
                    wrongAnswers: ["特征选择", "特征降维", "特征构造"]
                },
                {
                    id: 162,
                    question: "以下选项描述了行之有效的数据分析复杂性降低手段（）。",
                    correctAnswers: ["降维处理"],
                    wrongAnswers: ["更新操作", "剔除余", "稀疏编码"]
                },
                {
                    id: 163,
                    question: "常见的线性映射方法是（）。",
                    correctAnswers: ["主成分分析"],
                    wrongAnswers: ["聚类分析", "归类分析", "KNN"]
                },
                {
                    id: 164,
                    question: "聚合特征构造主要通过多个特征（）聚合实现。",
                    correctAnswers: ["分组"],
                    wrongAnswers: ["过滤", "嵌入", "降维"]
                },
                {
                    id: 165,
                    question: "（）特征构造方法旨在减少数据集的维度。",
                    correctAnswers: ["降维特征构造"],
                    wrongAnswers: ["聚合特征构造", "包裹时特征构造", "转换特征构造"]
                },
                {
                    id: 166,
                    question: "以下选项是数据标注质量的衡量尺（）。",
                    correctAnswers: ["数据标注规则"],
                    wrongAnswers: ["数据归约", "数据清洗", "数据提取"]
                },
                {
                    id: 167,
                    question: "（）是将原始数据进行处理和转换，以满足特定需求或达到特定目的的过程。",
                    correctAnswers: ["数据转换"],
                    wrongAnswers: ["数据归约", "数据清洗", "数据分析"]
                },
                {
                    id: 168,
                    question: "数据变换包括以下选项（）",
                    correctAnswers: ["以上都是"],
                    wrongAnswers: ["数据平滑", "数据聚集", "数据泛化"]
                },
                {
                    id: 169,
                    question: "在进行数据清洗的过程中，（）方法是指将含有缺失属性值的对象直接删除，从而得到一个完备的信息表。",
                    correctAnswers: ["忽略元组"],
                    wrongAnswers: ["数据补齐", "平均值填充", "不处理"]
                },
                {
                    id: 170,
                    question: "大量带有缺失值的数据记录存在明显的数据（）或特征。",
                    correctAnswers: ["分布规律"],
                    wrongAnswers: ["类别", "汇总", "构造"]
                },
                {
                    id: 171,
                    question: "（）是指在测量一个变量时可能出现的测量值相对于真实值的偏差或错误。",
                    correctAnswers: ["噪声"],
                    wrongAnswers: ["编码", "异常", "清洗"]
                },
                {
                    id: 172,
                    question: "分箱的方法不包括以下选项（）。",
                    correctAnswers: ["删除记录"],
                    wrongAnswers: ["等深分箱法", "最小熵", "用户自定义区间"]
                },
                {
                    id: 173,
                    question: "希望最小化存储空间并且只考虑相同文件内容选择（）方法。",
                    correctAnswers: ["文件级去重"],
                    wrongAnswers: ["数据块级去重", "分类去重", "标记去重"]
                },
                {
                    id: 174,
                    question: "自动驾驶属于（）的应用领域。",
                    correctAnswers: ["区域标注"],
                    wrongAnswers: ["语音标注", "文本标注", "分类标注"]
                },
                {
                    id: 175,
                    question: "对采集到的数据进行（）等操作，方便后续数据处理算法识别。",
                    correctAnswers: ["以上都有"],
                    wrongAnswers: ["归类、整理", "标记", "编辑、纠错"]
                },
                {
                    id: 176,
                    question: "语音标注是指将听到的（）进行转写，并适当打上标签。",
                    correctAnswers: ["音频"],
                    wrongAnswers: ["文本", "数字", "信号"]
                },
                {
                    id: 177,
                    question: "不是常用的语音处理工具（）",
                    correctAnswers: ["Matlab"],
                    wrongAnswers: ["GoldWare", "Logic", "Adobe Audition"]
                },
                {
                    id: 178,
                    question: "实体命名的实体一般不包括（）。",
                    correctAnswers: ["动词"],
                    wrongAnswers: ["人名", "地名", "组织名"]
                },
                {
                    id: 179,
                    question: "文本标注的现实应用场景不包括文本的（）。",
                    correctAnswers: ["因果标注"],
                    wrongAnswers: ["实体标注", "情感标注", "相似性判断标注"]
                },
                {
                    id: 180,
                    question: "（）是最简单、最常用的数据标注类型，主要包括矩形拉框、打点标注和点云拉框等。",
                    correctAnswers: ["图像标注"],
                    wrongAnswers: ["语音标注", "文本标注", "视频标注"]
                },
                {
                    id: 181,
                    question: "图像处理的流程是指对图像进行（）等模块分析。",
                    correctAnswers: ["以上都有"],
                    wrongAnswers: ["采集、显示", "存储、处理", "通信"]
                },
                {
                    id: 182,
                    question: "（）是由图像连续播放组成的数据标注类型。",
                    correctAnswers: ["视频标注"],
                    wrongAnswers: ["语音标注", "文本标注", "图像标注"]
                },
                {
                    id: 183,
                    question: "下列不是视频常用编辑软件的是（）",
                    correctAnswers: ["Photoshop"],
                    wrongAnswers: ["爱剪辑", "快剪辑", "AdobePremiere"]
                },
                {
                    id: 184,
                    question: "视频标注源视频做结构化处理，不包括（）。",
                    correctAnswers: ["图像分切"],
                    wrongAnswers: ["镜头检测", "分割", "关键帧提取"]
                },
                {
                    id: 185,
                    question: "数据标注在医疗行业涉及的应用场景不包括（）",
                    correctAnswers: ["人员识别"],
                    wrongAnswers: ["手术工具识别", "处方识别", "医疗影像标注"]
                },
                {
                    id: 186,
                    question: "文本数据标注质量评估的算法不包括（）。",
                    correctAnswers: ["COR算法"],
                    wrongAnswers: ["BLEU算法", "ROUGE算法", "METEOR算法"]
                },
                {
                    id: 187,
                    question: "文本数据标注在生活中的应用比较广泛，包括（）",
                    correctAnswers: ["名片自动识别"],
                    wrongAnswers: ["音频识别", "信号识别", "视频识别"]
                },
                {
                    id: 188,
                    question: "（）是指通过算法模型识别转录后的文本内容并将其与对应的音频进行逻辑关联。",
                    correctAnswers: ["语音标注"],
                    wrongAnswers: ["文本标注", "图像标注", "视频标注"]
                },
                {
                    id: 189,
                    question: "语音数据标注是通过（）识别转录后的文本内容，并将其与对应的音频进行逻辑关联。",
                    correctAnswers: ["算法模型"],
                    wrongAnswers: ["自然语言处理", "音频切割", "实时翻译"]
                },
                {
                    id: 190,
                    question: "不是语音数据标注工具（）",
                    correctAnswers: ["SER"],
                    wrongAnswers: ["CIA", "Praat", "ModelArts"]
                },
                {
                    id: 191,
                    question: "常用的数据标注工具的标注结果导出格式不包括",
                    correctAnswers: ["DAT"],
                    wrongAnswers: ["CSV", "XML", "JSON"]
                },
                {
                    id: 192,
                    question: "下面（）是常见的数据标注结果文件后缀名。",
                    correctAnswers: ["xml"],
                    wrongAnswers: ["csV", "avi", "jpg"]
                },
                {
                    id: 193,
                    question: "下面对CSV格式的文件叙述不正确的是（）。",
                    correctAnswers: ["以逗号或空格为分隔符"],
                    wrongAnswers: ["每条记录占一行", "若字段中包含逗号，则该字段必须用双引号括起来", "若字段中包含双引号，则该字段必须用双引号括起来"]
                },
                {
                    id: 194,
                    question: "判断数据标注的质量主要体现在标注数量和（）",
                    correctAnswers: ["标注内容质量"],
                    wrongAnswers: ["标注时间", "标注形式", "标注成本"]
                },
                {
                    id: 195,
                    question: "不能以（）指标来衡量数据质量。",
                    correctAnswers: ["覆盖性"],
                    wrongAnswers: ["时效性", "范围", "可信性"]
                },
                {
                    id: 196,
                    question: "（）包含技术上的实现方式或结构上的优化调整，通常可以根据代码改动范围来确定需要测试的范围。",
                    correctAnswers: ["开发技术文档"],
                    wrongAnswers: ["用户反馈", "产品需求文档", "技术选代"]
                },
                {
                    id: 197,
                    question: "测试计划不能描述测试活动（）的文档。",
                    correctAnswers: ["费用"],
                    wrongAnswers: ["范围", "方法", "进度"]
                },
                {
                    id: 198,
                    question: "测试报告主要分为（）和总结测试报告。",
                    correctAnswers: ["版本测试报告"],
                    wrongAnswers: ["需求测试报告", "开发测试报告", "阶段测试报告"]
                },
                {
                    id: 199,
                    question: "测试环境分为硬件环境，软件版本，（）。",
                    correctAnswers: ["系统拓扑图"],
                    wrongAnswers: ["开发环境", "需求报告", "CPU型号"]
                },

                {
                    id: 200,
                    question: "测试集的独立性是为了防止由于测试数据集（）导致的测试结果的失真风险。",
                    correctAnswers: ["相互干扰"],
                    wrongAnswers: ["数据失真", "数据冗余", "不相干"]
                },
                {
                    id: 201,
                    question: "以下内容不属于测试报告的是（）。",
                    correctAnswers: ["问题概要"],
                    wrongAnswers: ["测试方法", "测试工具", "结论性能汇总"]
                },
                {
                    id: 202,
                    question: "（）可以降低软件质量风险，使程序员能够更专心于解决程序的算法和效率。",
                    correctAnswers: ["软件测试"],
                    wrongAnswers: ["拟合算法", "风险评估", "优化模型"]
                },
                {
                    id: 203,
                    question: "以下不属于软件测试流程的有（）。",
                    correctAnswers: ["用户反馈"],
                    wrongAnswers: ["需求分析", "实时测试", "提交缺陷报告"]
                },
                {
                    id: 204,
                    question: "在工作中测试组织结构一般不涉及的人员是（）。",
                    correctAnswers: ["项目经理"],
                    wrongAnswers: ["测试经理", "项目测试经理", "测试分析员"]
                },
                {
                    id: 205,
                    question: "ROC曲线是通过绘制模型的方式来评估（）。",
                    correctAnswers: ["分类模型"],
                    wrongAnswers: ["聚类模型", "逻辑模型", "拟合模型"]
                },
                {
                    id: 206,
                    question: "以下不属于回归算法模型评价指标的是（）。",
                    correctAnswers: ["均值"],
                    wrongAnswers: ["可解释方差", "R方值", "平均绝对误差"]
                },
                {
                    id: 207,
                    question: "以下不属于检测算法的是（）。",
                    correctAnswers: ["点检测法"],
                    wrongAnswers: ["聚类分析法", "分类算法", "背景建模法"]
                },
                {
                    id: 208,
                    question: "（）是分类模型正确分类的样本数与样本总数的比值。",
                    correctAnswers: ["准确率"],
                    wrongAnswers: ["精准率", "召回率", "误差率"]
                },
                {
                    id: 209,
                    question: "精准率是模型正确分类的正例样本数与总的（）样本总数。",
                    correctAnswers: ["正例"],
                    wrongAnswers: ["反例", "中例", "个例"]
                },
                {
                    id: 210,
                    question: "以下不属于二分类评价指标的是（）。",
                    correctAnswers: ["R Square"],
                    wrongAnswers: ["准确率", "召回率", "精确率"]
                },
                {
                    id: 211,
                    question: "（）将样本按照一定比例划分为训练集与检验集两个集合，两个集合中样本随机分配且不重叠。",
                    correctAnswers: ["保留法"],
                    wrongAnswers: ["蒙特卡洛交叉验证", "K折交叉验证", "留一法"]
                },
                {
                    id: 212,
                    question: "蒙特卡洛交叉验证将数据随机划分为训练集于检验集，使用检验集检验训练的模型效果，多次重复过程取（）作为模型好坏的评价标准。",
                    correctAnswers: ["平均值"],
                    wrongAnswers: ["方差", "比例", "标准差"]
                },
                {
                    id: 213,
                    question: "以下不属于算法测试分类效果评价方法的是（）。",
                    correctAnswers: ["AUC"],
                    wrongAnswers: ["蒙特卡洛交叉验证", "k折交叉验证", "保留法"]
                },
                {
                    id: 214,
                    question: "最好使用（）来初始化ReLU激活函数。",
                    correctAnswers: ["He"],
                    wrongAnswers: ["Xaview", "tanh", "Sigmoid"]
                },
                {
                    id: 215,
                    question: "以下不属于激活函数的是（）。",
                    correctAnswers: ["Softmax"],
                    wrongAnswers: ["sigmoid函数", "tanh函数", "SoftSign"]
                },
                {
                    id: 216,
                    question: "以下选项不属于算法的正确性（）。",
                    correctAnswers: ["算法程序对于精心设计、极其刁难的测试数据无法满足要求的输出结果"],
                    wrongAnswers: ["算法程序没有语法错误", "算法程序能够根据正确的输入的值得到满足要求的输出结果", "算法程序能够根据错误的输出的值满足规格说明的输出结果"]
                },
                {
                    id: 217,
                    question: "算法的健壮性是指当输入的据非法时，算法应当恰当地做出反应或进行相应处理，处理方法为（）。",
                    correctAnswers: ["返回一个表示错误或错误性质的值"],
                    wrongAnswers: ["按照错误输入计算输出结果", "中断程序的运行", "自动修复算法数据"]
                },
                {
                    id: 218,
                    question: "设计算法的原则不包括（）。",
                    correctAnswers: ["高度优化"],
                    wrongAnswers: ["正确性", "健壮性", "高效率"]
                },
                {
                    id: 219,
                    question: "算法的每一步骤都能有效的执行，并得到确定的结果，称为算法的（）。",
                    correctAnswers: ["确定性"],
                    wrongAnswers: ["无穷性", "正确性", "可行性"]
                },
                {
                    id: 220,
                    question: "算法的特征不包括（）。",
                    correctAnswers: ["无穷性"],
                    wrongAnswers: ["确定性", "输入性", "输出性"]
                },
                {
                    id: 221,
                    question: "算法有一个初始输入，它给出最原始的条件，并且有一个最终的算法输出，它给出算法的目标，同时每个算法需有一个（）。",
                    correctAnswers: ["算法名"],
                    wrongAnswers: ["多义性", "多条执行路径", "无效结果"]
                },
                {
                    id: 222,
                    question: "（）是对算法最基本、最重要的要求。",
                    correctAnswers: ["正确性"],
                    wrongAnswers: ["健壮性", "高效性", "可读性"]
                },
                {
                    id: 223,
                    question: "算法正确性包括（）。",
                    correctAnswers: ["证明关于输入与输出之间关系的命题是正确的"],
                    wrongAnswers: ["证明最终的结果是确定的", "证明算法是有界的", "证明算法是可读的"]
                },
                {
                    id: 224,
                    question: "（）是设计和制定测试过程的基础，一个好的测试用例会使测试工作的效果事半功倍，并且能尽早发现一些隐藏的软件缺陷。",
                    correctAnswers: ["测试用例"],
                    wrongAnswers: ["测试报告", "测试计划", "测试分析"]
                },
                {
                    id: 225,
                    question: "在软件版本更新后，只需修正少部分的测试用例即可开展测试工作，降低工作强度，缩短项目周期。称为测试用例的（）。",
                    correctAnswers: ["可维护性"],
                    wrongAnswers: ["有效性", "盲目性", "周期性"]
                },
                {
                    id: 226,
                    question: "以下不属于测试用例的作用特性（）。",
                    correctAnswers: ["耦合性"],
                    wrongAnswers: ["避免测试的盲目性", "可维护性", "可管理性"]
                },
                {
                    id: 227,
                    question: "（）是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令，代表着用系统的方法描述解决问题的策略机制。",
                    correctAnswers: ["算法"],
                    wrongAnswers: ["进程", "语句", "程序"]
                },
                {
                    id: 228,
                    question: "算法的（）特征是指算法必须能在执行有穷个步骤之后终止。",
                    correctAnswers: ["有穷性"],
                    wrongAnswers: ["确切性", "终止性", "可行性"]
                },
                {
                    id: 229,
                    question: "算法优化不针对算法的（）性能进行优化。",
                    correctAnswers: ["可读性"],
                    wrongAnswers: ["空间复杂度", "正确性", "健壮性"]
                },
                {
                    id: 230,
                    question: "渐进时间复杂度是算法（）的度量。",
                    correctAnswers: ["效率"],
                    wrongAnswers: ["精度", "大小", "容量"]
                },
                {
                    id: 231,
                    question: "聚类分析的度量指标用于对聚类结果进行评判，分为外部指标和（）。",
                    correctAnswers: ["内部指标"],
                    wrongAnswers: ["隐藏指标", "空间指标", "时间指标"]
                },
                {
                    id: 232,
                    question: "聚类分析指将物理或抽象对象的（）为由类似的对象组成的多个类的分析过程。",
                    correctAnswers: ["集合分组"],
                    wrongAnswers: ["内部规律总结", "表面现象归纳", "模型具现"]
                },
                {
                    id: 233,
                    question: "算法度量的外部指标不包括（）。",
                    correctAnswers: ["紧密度"],
                    wrongAnswers: ["Rand统计量", "Jaccard系数", "F值"]
                },
                {
                    id: 234,
                    question: "文本可视化可以将文本中的（）展示出来。",
                    correctAnswers: ["隐藏信息"],
                    wrongAnswers: ["表面数据", "作者意图", "所有细节"]
                },
                {
                    id: 235,
                    question: "Chart.js是一款基于（）实现的轻量级工具。",
                    correctAnswers: ["Javascript"],
                    wrongAnswers: ["Python", "C++", "Matlab"]
                },
                {
                    id: 236,
                    question: "（）是一款文字云产生器，使用者将一串文字输入后，通过这个工具，产生不同样式的文字风格。",
                    correctAnswers: ["Wordle"],
                    wrongAnswers: ["Raw", "Orange", "Facets"]
                },
                {
                    id: 237,
                    question: "以下不属于算法可视化常用工具的有（）。",
                    correctAnswers: ["Axure"],
                    wrongAnswers: ["WPS表格", "Tableau", "Python"]
                },
                {
                    id: 238,
                    question: "直方图由一系列高度不等的纵向线段表示（）的情况。",
                    correctAnswers: ["数据分布"],
                    wrongAnswers: ["部分占总体比例", "区域与总体的关系", "数据分散"]
                },
                {
                    id: 239,
                    question: "常用的关系可视化图不包括（）。",
                    correctAnswers: ["直方图"],
                    wrongAnswers: ["散点图", "热图", "气泡图"]
                },
                {
                    id: 240,
                    question: "某算法的时间复杂度O(Cn^2)，表面该算法的（）。",
                    correctAnswers: ["执行时间与n^2成正比"],
                    wrongAnswers: ["问题规模是n^2", "执行时间等于于n^2", "问题规模与n^2成正比"]
                },
                {
                    id: 241,
                    question: "算法复杂度指算法在编写成可执行程序后，运行时所需要的资源，这里的资源包括（）。",
                    correctAnswers: ["时间资源"],
                    wrongAnswers: ["CPU资源", "空间资源", "GPU资源"]
                },
                {
                    id: 242,
                    question: "（）是指不借助任何外部参考，只用参与聚类的样本评判聚类结果的好坏。",
                    correctAnswers: ["内部指标"],
                    wrongAnswers: ["外部指标", "时间指标", "空间指标"]
                },
                {
                    id: 243,
                    question: "算法度量的内部指标不包括（）。",
                    correctAnswers: ["Rand统计量"],
                    wrongAnswers: ["欧式距离", "切比雪夫距离", "邓恩指数"]
                },
                {
                    id: 244,
                    question: "网络爬虫是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。其基本以（）语言为主。",
                    correctAnswers: ["Python"],
                    wrongAnswers: ["JAVA", "C++", "Matlab"]
                },
                {
                    id: 245,
                    question: "引导用户自发参与是指在产品中设计相应的日志记录或（），引导用户主动将数据结果反馈给系统。",
                    correctAnswers: ["操作步骤"],
                    wrongAnswers: ["程序结果", "系统崩溃", "全部进程"]
                },
                {
                    id: 246,
                    question: "机器学习中，用于训练的数据需要解决的问题不包括（）。",
                    correctAnswers: ["来源"],
                    wrongAnswers: ["存储", "表示", "规模"]
                },
                {
                    id: 247,
                    question: "批次是模型训练时（）中使用的样本集合的数量。",
                    correctAnswers: ["一次迭代"],
                    wrongAnswers: ["多次迭代", "一次递归", "二次递归"]
                },
                {
                    id: 248,
                    question: "分类算法中训练误差代表此分类方法对于现有训练样本集的（）。",
                    correctAnswers: ["拟合程度"],
                    wrongAnswers: ["收敛程度", "发散程度", "递归程度"]
                },
                {
                    id: 249,
                    question: "过度拟合训练数据导致模型的（）随着模型与训练数据的拟合程度增高而下降。",
                    correctAnswers: ["泛化能力"],
                    wrongAnswers: ["脱敏能力", "递归程度", "梯度下降指标"]
                },
                {
                    id: 250,
                    question: "分类算法可能产生的误差有（）。",
                    correctAnswers: ["泛化误差"],
                    wrongAnswers: ["抽样误差", "随机误差", "系统误差"]
                },
                {
                    id: 251,
                    question: "一共检测了30个模型，有两类A，假设检测到了A类15个，但这15张图中A类真实存在的数目是10个。这时候A类的精确率为（）。",
                    correctAnswers: ["66.70%"],
                    wrongAnswers: ["50%", "35%", "33.30%"]
                },
                {
                    id: 252,
                    question: "用于聚类的神经网络算法的评价指标不包括（）。",
                    correctAnswers: ["F1"],
                    wrongAnswers: ["RMSSTD", "SRP", "R Square"]
                },
                {
                    id: 253,
                    question: "如果学习率设置的太小，参数更新速度太慢，导致无法快速的找到好的下降方向，随着（）增大模型损失基本不变，需要消耗更多的训练资源来保证获取到参数的最优值。",
                    correctAnswers: ["迭代次数"],
                    wrongAnswers: ["递归次数", "回归次数", "拟合次数"]
                },
                {
                    id: 254,
                    question: "学习率调整的方法不包括（）。",
                    correctAnswers: ["对数级衰减"],
                    wrongAnswers: ["基于经验的手动调整", "均匀分布降低策略", "指数级衰减"]
                },
                {
                    id: 255,
                    question: "（）通过一定规则扩充数据，增加训练样本数量，并且平衡各类别中样本的比例，有助于减少过拟合问题。",
                    correctAnswers: ["数据增强"],
                    wrongAnswers: ["Dropout", "Bagging", "批正则化"]
                },
                {
                    id: 256,
                    question: "以下方法中可以防止过拟合的是（）。",
                    correctAnswers: ["以上都是"],
                    wrongAnswers: ["参数范数惩罚", "数据增强", "Dropout"]
                },
                {
                    id: 257,
                    question: "随机搜索是给每个超参数定义一个边缘分布，从指定的分布中（）的超参数进行组合。",
                    correctAnswers: ["随机选取固定数量"],
                    wrongAnswers: ["指定选取随机数量", "随机选取随机数量", "指定选取固定数量"]
                },
                {
                    id: 258,
                    question: "网络搜索在所划分网格内，（）的点所对应的分类准确率都非常低。",
                    correctAnswers: ["大部分"],
                    wrongAnswers: ["少部分", "全局", "随机范围"]
                },
                {
                    id: 259,
                    question: "不属于常见的超参数优化方法的是（）。",
                    correctAnswers: ["梯度下降"],
                    wrongAnswers: ["网格搜索", "随机搜索", "贝叶斯优化"]
                },
                {
                    id: 260,
                    question: "算法数据的分析方法中（）可以最醒目地表达各个物理量间的变化关系。",
                    correctAnswers: ["作图法"],
                    wrongAnswers: ["列表法", "预测法", "特征描述法"]
                },
                {
                    id: 261,
                    question: "不能用于数据分析的作图工具的是（）。",
                    correctAnswers: ["Axure"],
                    wrongAnswers: ["SPSS", "WPS表格", "Python"]
                },
                {
                    id: 262,
                    question: "训练误差损失函数的期望是模型关于（）的期望损失。",
                    correctAnswers: ["联合分布"],
                    wrongAnswers: ["条件分布", "边缘分布", "概率分布"]
                },
                {
                    id: 263,
                    question: "K折交叉验证将数据切分为K个互不相交的大小相同数据集，用（）个子集训练。",
                    correctAnswers: ["k-1"],
                    wrongAnswers: ["k", "k-2", "1"]
                },
                {
                    id: 264,
                    question: "k折交叉验证中，一些验证表明，当k取（）时，在计算代价和性能之间能达到好的平衡。",
                    correctAnswers: ["10"],
                    wrongAnswers: ["5", "50", "100"]
                },
                {
                    id: 265,
                    question: "K折交叉验证的用途有（）。",
                    correctAnswers: ["模型评估"],
                    wrongAnswers: ["模型训练", "算法选择", "模型预测"]
                },
                {
                    id: 266,
                    question: "（）在概率论和统计学中用于衡量两个变量的总体误差。",
                    correctAnswers: ["协方差"],
                    wrongAnswers: ["众数", "平均值", "极值"]
                },
                {
                    id: 267,
                    question: "如果两个变量a，b，（）那么两个变量之间的协方差就是负值。",
                    correctAnswers: ["其中a大于自身的期望值"],
                    wrongAnswers: ["其中b等于自身的期望值", "其中b大于自身的期望值", "其中a等于自身的期望值"]
                },
                {
                    id: 268,
                    question: "标准误差，如果误差统计分布是正态分布，那么随机误差落在±σ以内的概率为（）。",
                    correctAnswers: ["68%"],
                    wrongAnswers: ["50%", "100%", "25%"]
                },
                {
                    id: 269,
                    question: "标准误差是预测值与真实值偏差的平方与观测次数n比值的（）。",
                    correctAnswers: ["平方根"],
                    wrongAnswers: ["总和", "平方", "三次方根"]
                },
                {
                    id: 270,
                    question: "在参数估计中，要求通过样本的统计量来估计总体参数，评价统计量的标准之一是使它与总体参数的离差越小越好。这种评价标准称为（）。",
                    correctAnswers: ["有效性"],
                    wrongAnswers: ["无偏性", "一致性", "充分性"]
                },
                {
                    id: 271,
                    question: "以下不属于参数估计方法的是（）。",
                    correctAnswers: ["角估计"],
                    wrongAnswers: ["贝叶斯估计", "最小二乘法", "极大似然估计"]
                },
                {
                    id: 272,
                    question: "多元回归的评价指标不包括（）。",
                    correctAnswers: ["R^2"],
                    wrongAnswers: ["非标准化系数", "标准化系数", "t检验及其显著性水平 (sig)"]
                },
                {
                    id: 273,
                    question: "逻辑回归主要解决（）问题。",
                    correctAnswers: ["分类"],
                    wrongAnswers: ["聚类", "优化", "评价"]
                },
                {
                    id: 274,
                    question: "逻辑回归是用概率的方式，预测出属于某一分类的概率值，如果概率值超过（），则属于某一分类。",
                    correctAnswers: ["50%"],
                    wrongAnswers: ["40%", "60%", "75%"]
                },
                {
                    id: 275,
                    question: "下面关于逻辑回归的说法错误的是（）。",
                    correctAnswers: ["逻辑回归主要解决聚类问题"],
                    wrongAnswers: ["逻辑回归是一种预测分析", "逻辑回归和线性回归的不同之处是它的目标变量有多个类别", "逻辑回归是用概率的方式预测出属于某一分类的概率值"]
                },
                {
                    id: 276,
                    question: "以下为统计分析中最常用的方法是（）。",
                    correctAnswers: ["对比分析法"],
                    wrongAnswers: ["分组分析法", "预测分析法", "漏斗分析法"]
                },
                {
                    id: 277,
                    question: "对比分析法通过指标的对比来反应事物（）上的差异和变化。",
                    correctAnswers: ["数量"],
                    wrongAnswers: ["质量", "比重", "容量"]
                },
                {
                    id: 278,
                    question: "对比分析法不能对（）做出判断和评价。",
                    correctAnswers: ["未来数据"],
                    wrongAnswers: ["规模大小", "水平高低", "速度快慢"]
                },
                {
                    id: 279,
                    question: "预测分析法主要用于未知数据的判断和（）。",
                    correctAnswers: ["预测"],
                    wrongAnswers: ["对比", "测试", "转化"]
                },
                {
                    id: 280,
                    question: "某产品依据过往三年的历史销售数据，想要分析出未来六个月的销售额，最合适的数据分析法是（）。",
                    correctAnswers: ["预测分析法"],
                    wrongAnswers: ["对比分析法", "AB测试分析法", "分组分析法"]
                },
                {
                    id: 281,
                    question: "以下属于预测分析法中的回归预测的是（）。",
                    correctAnswers: ["线性回归"],
                    wrongAnswers: ["逻辑回归", "k均值", "关联规则"]
                },
                {
                    id: 282,
                    question: "漏斗分析法能够科学反映的用户行为状态，以及观察出从行为起点到终点中各阶段用户的（）情况。",
                    correctAnswers: ["转化率"],
                    wrongAnswers: ["存活率", "使用率", "安装率"]
                },
                {
                    id: 283,
                    question: "漏斗分析法不涉及以下要素（）。",
                    correctAnswers: ["研究对象"],
                    wrongAnswers: ["时间", "节点", "转化率"]
                },
                {
                    id: 284,
                    question: "AB测试分析法侧重于对比AB两组结构（）的样本。",
                    correctAnswers: ["相似"],
                    wrongAnswers: ["相同", "差异较大", "完全不同"]
                },
                {
                    id: 285,
                    question: "统计学的实质就是根据样本的（）来推断总体的情况。",
                    correctAnswers: ["特征"],
                    wrongAnswers: ["共性", "个数", "分组"]
                },
                {
                    id: 286,
                    question: "从总体中随机抽出部分样品，并根据样本推断出总体的平均水平，这种检验方法是（）。",
                    correctAnswers: ["均值检验"],
                    wrongAnswers: ["相关系数检验", "卡方检验", "正态性检验"]
                },
                {
                    id: 287,
                    question: "通过（）推断样本的两个属性是否相关。",
                    correctAnswers: ["Pearson相关性检验"],
                    wrongAnswers: ["均值检验", "t检验", "Shapiro正态性检验"]
                },
                {
                    id: 288,
                    question: "卡方检验用于两个（）变量之间。",
                    correctAnswers: ["离散型"],
                    wrongAnswers: ["连续型", "流程型", "分段型"]
                },
                {
                    id: 289,
                    question: "Pearson相关性检验用于验证两个变量之间的（）。",
                    correctAnswers: ["独立性"],
                    wrongAnswers: ["相关性", "离散型", "连续性"]
                },
                {
                    id: 290,
                    question: "以下事件可以用卡方检验与Pearson相关性检验（）。",
                    correctAnswers: ["汽车速度与刹车距离"],
                    wrongAnswers: ["检验某品牌充电宝是否满足宣传的5000毫安容量的说法", "分析某学生的各科成绩，判断是否偏科严重", "乘客的年龄数据是否服从正态分布"]
                },
                {
                    id: 291,
                    question: "（）适合描述单位时间内随机事件发生的次数的概率分布。",
                    correctAnswers: ["泊松分布"],
                    wrongAnswers: ["卡方分布", "高斯分布", "二项分布"]
                },
                {
                    id: 292,
                    question: "正态分布曲线一种（）。",
                    correctAnswers: ["概率分布"],
                    wrongAnswers: ["指数分布", "频数分布", "空间分布"]
                },
                {
                    id: 293,
                    question: "正态曲线下，横轴上，从均数到正无穷的面积为（）。",
                    correctAnswers: ["50%"],
                    wrongAnswers: ["95%", "97.50%", "不确定"]
                },
                {
                    id: 294,
                    question: "以下选项不属于正态曲线的特征（）。",
                    correctAnswers: ["曲线与x轴有两个交点"],
                    wrongAnswers: ["集中性", "对称性", "均匀变动性"]
                },
                {
                    id: 295,
                    question: "盒中有a个红球，b个黑球，今随机地从中取出一球，观察其颜色后放回，并加上同色球c个，再从盒中第二次抽取一球，第二次抽出的球是黑球的概率为（）。",
                    correctAnswers: ["b/(a+b)"],
                    wrongAnswers: ["(b+c)/(a+b+c)", "b/(a+b+c)", "a/(a+b)"]
                },
                {
                    id: 296,
                    question: "设某工厂有两个车间生产同型号家用电器，第一车间的次品率为0.15，第二车间的次品率为0.12，两个车间的成品都混合堆放在一个仓库，假设第1，2车间生产的成品比例为2:3，今有一客户从成品仓库中随机提一台产品，该产品合格的概率为（）。",
                    correctAnswers: ["0.868"],
                    wrongAnswers: ["0.88", "0.4", "0.6"]
                },
                {
                    id: 297,
                    question: "平均数是反映数据（）的一项指标。",
                    correctAnswers: ["集中趋势"],
                    wrongAnswers: ["分散程度", "出现概率", "未来走向"]
                },

                {
                    id: 298,
                    question: "概率论中（）用来度量随机变量和其数学期望（B即均值）之间的偏离程度。",
                    correctAnswers: ["方差"],
                    wrongAnswers: ["中位数", "平均值", "极值"]
                },
                {
                    id: 299,
                    question: "统计中的方差（A样本方差）是每个样本值与全体样本值的平均数之差的（）的平均数。",
                    correctAnswers: ["平方值"],
                    wrongAnswers: ["三次方", "二次根号", "二倍"]
                },
                {
                    id: 300,
                    question: "方差是衡量（）两个数据相差的度量值。",
                    correctAnswers: ["源数据和期望值"],
                    wrongAnswers: ["源数据和中位数", "源数据和极大值", "源数据和标准差"]
                },
                {
                    id: 301,
                    question: "特征提取中，（）是通过坐标轴转换，寻找数据分布的最优子空间，从而达到降维、去相关的目的。",
                    correctAnswers: ["PCA主成分分析"],
                    wrongAnswers: ["LDA线性判别分析", "ICA独立成分分析", "特征识别"]
                },
                {
                    id: 302,
                    question: "特征工程中，以下选项是特征构建时常使用的方法（）。",
                    correctAnswers: ["属性分割"],
                    wrongAnswers: ["数据拟合", "数据脱敏", "数据平均"]
                },
                {
                    id: 303,
                    question: "如果要要统计数据的平均水平，最适合的统计分析法是（）。",
                    correctAnswers: ["描述性统计分析"],
                    wrongAnswers: ["探索性统计分析", "推断性统计分析", "预测性统计分析"]
                },
                {
                    id: 304,
                    question: "以下选项不属于数据离散程度分析中的指标（）。",
                    correctAnswers: ["中位数"],
                    wrongAnswers: ["标准差", "极差", "变异系数"]
                },
                {
                    id: 305,
                    question: "描述性统计分析不包括数据的（）。",
                    correctAnswers: ["假设检验"],
                    wrongAnswers: ["频数分析", "集中趋势分析", "离散程度分析"]
                },
                {
                    id: 306,
                    question: "研究某些变量之间是否存在一定的相关性需要采用以下方法（）。",
                    correctAnswers: ["探索性统计分析"],
                    wrongAnswers: ["描述性统计分析", "推断性统计分析", "预测性统计分析"]
                },
                {
                    id: 307,
                    question: "以下案例不适合使用探索性统计分析（）。",
                    correctAnswers: ["9月份网站流量的基本数据"],
                    wrongAnswers: ["汽车的速度与刹车距离的关系", "某电商的交易量在电脑端和手机端之间的比例变化", "泰坦尼克号男女乘客在一等舱内的票价是否存在差异"]
                },
                {
                    id: 308,
                    question: "（）是总体中所有个体在某个变量上观测值的频次分布。",
                    correctAnswers: ["总体分布"],
                    wrongAnswers: ["个体分布", "样本分布", "抽样分布"]
                },
                {
                    id: 309,
                    question: "抽样分布中的（）用来测量使用某个样本统计量来估计总体参数时的抽样误差。",
                    correctAnswers: ["标准差"],
                    wrongAnswers: ["极差", "数学期望", "众数"]
                },
                {
                    id: 310,
                    question: "以下选项不属于点估计的评判标准（）。",
                    correctAnswers: ["预知性"],
                    wrongAnswers: ["无偏性", "一致性", "有效性"]
                },
                {
                    id: 311,
                    question: "条形图是用（）的，条形的高度或长短来表示数据多少的图形。",
                    correctAnswers: ["宽度相同"],
                    wrongAnswers: ["完全相同", "标注相同", "宽度不同"]
                },
                {
                    id: 312,
                    question: "描绘条形图的三个要素不包括（）。",
                    correctAnswers: ["组颜色"],
                    wrongAnswers: ["组数", "组宽度", "组限"]
                },
                {
                    id: 313,
                    question: "使用Tableau时，如果需要绘制不同省销售额对应的条形图，需要（）。",
                    correctAnswers: ["将'销售额'字段拖到'列'功能区"],
                    wrongAnswers: ["将'国家'和'列'字段都拖到'行'功能区", "将'国家'字段拖到'列'功能区", "将'销售额'字段拖到'行'功能区"]
                },
                {
                    id: 314,
                    question: "面积图中线和轴之间的区域用（）标记。",
                    correctAnswers: ["颜色"],
                    wrongAnswers: ["折线", "直线", "柱形"]
                },
                {
                    id: 315,
                    question: "通过面积图可以对数值的（）进行直观的反映。",
                    correctAnswers: ["变化趋势"],
                    wrongAnswers: ["平均值", "占比", "总量"]
                },
                {
                    id: 316,
                    question: "（）可以显示部分与整体的关系。",
                    correctAnswers: ["百分比堆积面积图"],
                    wrongAnswers: ["折线图", "柱形图", "气泡图"]
                },
                {
                    id: 317,
                    question: "饼图显示一个（）中各项的大小与各项总和的比例。",
                    correctAnswers: ["数据系列"],
                    wrongAnswers: ["数据图案", "数据颜色", "数据点"]
                },
                {
                    id: 318,
                    question: "不属于饼图的使用要求的是（）。",
                    correctAnswers: ["类别数目无限制"],
                    wrongAnswers: ["仅有一个要绘制的数据系列", "要绘制的数值几乎没有零值", "各类别分别代表整个饼图的一部分"]
                },
                {
                    id: 319,
                    question: "（）可以绘制生成多种多样的数据可视化图表，帮助用户找出数字背后隐藏的秘密，进行业务决策。",
                    correctAnswers: ["Tableau"],
                    wrongAnswers: ["Winrar", "PDF", "TXT"]
                },
                {
                    id: 320,
                    question: "不属于数据可视化图表的是（）。",
                    correctAnswers: ["数据表格"],
                    wrongAnswers: ["条形图", "柱形图", "面积图"]
                },
                {
                    id: 321,
                    question: "不属于描述性统计分析的作用的是（）。",
                    correctAnswers: ["置信度区间"],
                    wrongAnswers: ["频数分析", "趋势分析", "数据分布"]
                },
                {
                    id: 322,
                    question: "（）又称用户界面或使用者界面，是人与计算机之间传递、交换信息的媒介和对话接口，是计算机系统的重要组成部分。",
                    correctAnswers: ["人机界面"],
                    wrongAnswers: ["显示器画面", "人机接口", "机器界面"]
                },
                {
                    id: 323,
                    question: "人机结合面是（）中的中心环节。",
                    correctAnswers: ["人机系统"],
                    wrongAnswers: ["人机接口", "计算机系统", "交互系统"]
                },
                {
                    id: 324,
                    question: "不属于人机交互中的过程的是（）。",
                    correctAnswers: ["控制交互对象"],
                    wrongAnswers: ["识别交互对象", "理解交互对象", "把握对象情态"]
                },
                {
                    id: 325,
                    question: "人机界面设计时，根据终端用户对未来系统的假想设计用户模型，最终使之与系统实现后得到的（）相吻合，用户才能对系统感到满意并能有效的使用它。",
                    correctAnswers: ["系统映像"],
                    wrongAnswers: ["系统内部特征", "系统假想", "系统规律"]
                },
                {
                    id: 326,
                    question: "任务分析中，（）技术可把任务不断划分为子任务，直至对每个任务的要求都十分清楚。",
                    correctAnswers: ["逐步求精"],
                    wrongAnswers: ["面向过程", "面向对象", "面向任务"]
                },
                {
                    id: 327,
                    question: "人机交互界面的设计要包含用户对系统的理解，称之为（），这是为了系统的可用性或者用户友好性。",
                    correctAnswers: ["心智模型"],
                    wrongAnswers: ["系统模型", "系统假想", "人机模型"]
                },
                {
                    id: 328,
                    question: "（）是指人与计算机之间使用某种对话语言，以一定的交互方式，为完成确定任务的人与计算机之间的信息交换过程。",
                    correctAnswers: ["人机交互"],
                    wrongAnswers: ["系统界面", "人机界面", "交互设计"]
                },
                {
                    id: 329,
                    question: "以下选项不属于人机交互的研究内容（）。",
                    correctAnswers: ["硬件设备研究"],
                    wrongAnswers: ["可用性分析与评估", "多通道交互技术", "Web设计"]
                },
                {
                    id: 330,
                    question: "（）是用户与操作系统之间进行数据传递和互动操控的工具，用户可以通过一定的操作实现对电子设备的控制，同时电子设备会将用户操作的结果通过显示屏进行反馈。",
                    correctAnswers: ["图形用户界面"],
                    wrongAnswers: ["人机界面", "图形处理器", "图形显示屏"]
                },
                {
                    id: 331,
                    question: "用户界面的（）主要是指呈现给使用者的通用操作序列、术语和信息的措辞，界面元素的布局、颜色搭配方案和排版样式等都要保持一致。",
                    correctAnswers: ["一致性"],
                    wrongAnswers: ["逻辑性", "习惯性", "统一性"]
                },
                {
                    id: 332,
                    question: "界面布局应当体现用户操作时的一般顺序和（）。",
                    correctAnswers: ["被使用到的频繁程度"],
                    wrongAnswers: ["软件颜色顺序", "软件大小顺序", "软件排列顺序"]
                },
                {
                    id: 333,
                    question: "交互设计的（）原则表示设计要有充分准确的操作提示。",
                    correctAnswers: ["启发性"],
                    wrongAnswers: ["一致性", "反馈性", "可视性"]
                },
                {
                    id: 334,
                    question: "交互设计的限制性指在（）显示用户操作，以防误操作。",
                    correctAnswers: ["特定时刻"],
                    wrongAnswers: ["任意页面", "特定页面", "任意时刻"]
                },
                {
                    id: 335,
                    question: "以下选项中不属于交互设计的设计原则的是（）。",
                    correctAnswers: ["追求创新"],
                    wrongAnswers: ["可视性原则", "限制原则", "映射原则"]
                },
                {
                    id: 336,
                    question: "交互设计的设计阶段，设计方法采用面向场景，面向事件驱动和（）。",
                    correctAnswers: ["面向对象"],
                    wrongAnswers: ["面向界面", "面向人机", "面向过程"]
                },
                {
                    id: 337,
                    question: "不属于交互设计阶段的是（）。",
                    correctAnswers: ["人员招聘阶段"],
                    wrongAnswers: ["设计阶段", "配合开发人员阶段", "验证阶段"]
                },
                {
                    id: 338,
                    question: "有效性指的是用户在执行任务时，（）是否有效。",
                    correctAnswers: ["系统支持用户的方法"],
                    wrongAnswers: ["用户学习的方式", "用户规避风险的方式", "避免发生不快的方式"]
                },
                {
                    id: 339,
                    question: "安全性关系到保护用户以避免（）的情形。",
                    correctAnswers: ["发生令人不快"],
                    wrongAnswers: ["用户回想使用方法", "用户学习系统过于简单", "系统有效支持用户"]
                },
                {
                    id: 340,
                    question: "（）目标是交互设计的核心。",
                    correctAnswers: ["可用性"],
                    wrongAnswers: ["有趣性", "美观性", "启发性"]
                },
                {
                    id: 341,
                    question: "以下选项不是用户体验设计的目标（）。",
                    correctAnswers: ["高客户费力度"],
                    wrongAnswers: ["高客户满意度", "高净推荐值", "低客户费力度"]
                },
                {
                    id: 342,
                    question: "人们不太关心交互系统中的品质（）。",
                    correctAnswers: ["可定制"],
                    wrongAnswers: ["有趣", "有用", "富有启发性"]
                },
                {
                    id: 343,
                    question: "设计原则中，（）指的是控制及其效果之间的对应关系。",
                    correctAnswers: ["映射"],
                    wrongAnswers: ["逻辑", "关联", "反馈"]
                },
                {
                    id: 344,
                    question: "不属于Norman（A1999）划分的限制类别的是（）。",
                    correctAnswers: ["系统限制"],
                    wrongAnswers: ["物理限制", "逻辑限制", "文化限制"]
                },
                {
                    id: 345,
                    question: "不可以通过（）方式来操作虚拟对象。",
                    correctAnswers: ["思想"],
                    wrongAnswers: ["移动", "选择", "关闭"]
                },
                {
                    id: 346,
                    question: "设计的首要任务就是开发明确、具体的（）。",
                    correctAnswers: ["概念模型"],
                    wrongAnswers: ["用户界面", "系统工具", "交互框架"]
                },
                {
                    id: 347,
                    question: "为了保证概念模型能够为用户所理解，我们需要在开发过程中（）产品。",
                    correctAnswers: ["反复测试"],
                    wrongAnswers: ["分层下发", "安全使用", "提前应用"]
                },
                {
                    id: 348,
                    question: "不属于充实概念模型的方法的是（）。",
                    correctAnswers: ["实践测试"],
                    wrongAnswers: ["草拟构思", "使用情节串联法", "描述可能的场景"]
                },
                {
                    id: 349,
                    question: "设计是一个要求创造性的实践活动，其目的是要（），以帮助用户实现其目标。",
                    correctAnswers: ["开发产品"],
                    wrongAnswers: ["设计基本模型", "完善活动规则", "提高成功概率"]
                },
                {
                    id: 350,
                    question: "我们要以（）来指导产品开发。",
                    correctAnswers: ["用户需求"],
                    wrongAnswers: ["原有模型", "惯性思维", "科研技术"]
                },
                {
                    id: 351,
                    question: "评价设计的最佳方法就是（）。",
                    correctAnswers: ["让用户与产品交互"],
                    wrongAnswers: ["安全性分析", "易记性分析", "开发人员测试"]
                },
                {
                    id: 352,
                    question: "在项目开始时，我们就应标识出特定的可用性和（），并做明确说明。",
                    correctAnswers: ["用户体验目标"],
                    wrongAnswers: ["开发人员需求", "可靠行", "易学性"]
                },
                {
                    id: 353,
                    question: "不属于交互设计过程的关键特征的是（）。",
                    correctAnswers: ["以开发为中心"],
                    wrongAnswers: ["以用户为中心", "特定的可用性标准", "迭代"]
                },
                {
                    id: 354,
                    question: "交互设计大多数项目都是以（）开始的。",
                    correctAnswers: ["标识需要和需求"],
                    wrongAnswers: ["（重）设计", "评估", "构建交互式面板"]
                },
                {
                    id: 355,
                    question: "星形生命周期模型体现了一个非常灵活的，以（）为核心的开发过程。",
                    correctAnswers: ["需求规范"],
                    wrongAnswers: ["实现", "评估", "制作模型"]
                },
                {
                    id: 356,
                    question: "可用性工程生命周期模型体现了更为结构化的开发方法，它源自（）。",
                    correctAnswers: ["可用性工程"],
                    wrongAnswers: ["安全性工程", "可靠性工程", "可行性工程"]
                },
                {
                    id: 357,
                    question: "人机交互中的生命周期模型有以下选项（）。",
                    correctAnswers: ["星形生命周期模型"],
                    wrongAnswers: ["瀑布模型", "椭圆生命周期模型", "螺旋模型"]
                },
                {
                    id: 358,
                    question: "情节串联图由一系列草图组成，说明（）的过程。",
                    correctAnswers: ["使用产品执行任务"],
                    wrongAnswers: ["开发产品", "测试产品", "评估产品"]
                },
                {
                    id: 359,
                    question: "高保真原型的评测员容易专注于（）。",
                    correctAnswers: ["表面问题"],
                    wrongAnswers: ["本质问题", "内在问题", "规律问题"]
                },
                {
                    id: 360,
                    question: "高保真原型适用于向其他人讲解设计和（）。",
                    correctAnswers: ["反馈结果问题"],
                    wrongAnswers: ["开发技术问题", "需求生成问题", "测试技术问题"]
                },
                {
                    id: 361,
                    question: "（）是语音识别系统的重要组成部分，用于描述声学基元产生特征序列的过程。",
                    correctAnswers: ["声学模型"],
                    wrongAnswers: ["声音波形", "语言模型", "语言序列"]
                },
                {
                    id: 362,
                    question: "目前基于HMM的声建模型算法主要分为（）。",
                    correctAnswers: ["GMM-HMM"],
                    wrongAnswers: ["GNN-HMM", "DMM-HMM", "GNM-HMM"]
                },
                {
                    id: 363,
                    question: "语言模型是描述人类语言习惯的一种方式，体现了（）之间组成结构的内在规律。",
                    correctAnswers: ["词与词"],
                    wrongAnswers: ["发音与短剧", "发音与发音", "词与发音"]
                },
                {
                    id: 364,
                    question: "平滑技术是解决数据稀疏问题的重要方法，不属于平滑方法的是（）。",
                    correctAnswers: ["递归法"],
                    wrongAnswers: ["加1法", "线性减值法", "删除插值法"]
                },
                {
                    id: 365,
                    question: "（）的目标是将人类的语音中的词汇内容转换为计算机可读的输入，例如按键、二进制编码或者字符序列。",
                    correctAnswers: ["语音识别技术"],
                    wrongAnswers: ["按键转换技术", "词汇识别技术", "语音编码技术"]
                },
                {
                    id: 366,
                    question: "模拟的语音信号进行采样得到波形数据之后，首先要输入到特征提取模块，提取出合适的声学（）供后续声学模型训练使用。",
                    correctAnswers: ["特征参数"],
                    wrongAnswers: ["波形", "模块", "数字信号"]
                },
                {
                    id: 367,
                    question: "某公司要设计一种个人教学助理，其最佳的人机交互界面应该以（）作为传输介质的交互方法。",
                    correctAnswers: ["语音"],
                    wrongAnswers: ["图片", "大量文字", "表格"]
                },
                {
                    id: 368,
                    question: "以下属于语音识别系统发展方向的是（）。",
                    correctAnswers: ["小型化、便携式语音产品的应用"],
                    wrongAnswers: ["大型计算机", "卫星电话", "水下记录仪"]
                },
                {
                    id: 369,
                    question: "（）是描述声学信号特性的重要参数，只有提取到能描述信号本质的信息才可能将这些信息应用于高效的模式识别处理，如分类、回归等。",
                    correctAnswers: ["声学特征"],
                    wrongAnswers: ["信号波形", "语言界面", "声音模型"]
                },
                {
                    id: 370,
                    question: "声学特征的提取既是对原始波形信号进行压缩的过程，同时也是对信号进行（）的过程。",
                    correctAnswers: ["解卷积"],
                    wrongAnswers: ["卷积", "递归", "拟合"]
                },
                {
                    id: 371,
                    question: "以下不属于语音识别中传统语音特征提取方法的是（）。",
                    correctAnswers: ["冗余系数"],
                    wrongAnswers: ["线性预测系数", "倒谱系数", "梅尔频率倒谱系数"]
                },
                {
                    id: 372,
                    question: "以下选项不是随机模型法涉及到的技术（）。",
                    correctAnswers: ["标准化技术"],
                    wrongAnswers: ["动态时间规整", "隐马尔科夫模型理论", "矢量量化技术"]
                },
                {
                    id: 373,
                    question: "以下不属于语音识别技术常用的方法的是（）。",
                    correctAnswers: ["基于行为学的方法"],
                    wrongAnswers: ["基于语言学和声学的方法", "神经网络的方法", "随机模型法"]
                },
                {
                    id: 374,
                    question: "解码技术是语音识别系统的核心技术之一，给定语音特征观察序列，通过在一个由语言模型和声学模型所构造的搜索空间中寻找（）的状态序列。",
                    correctAnswers: ["匹配度最高"],
                    wrongAnswers: ["空间占用最小", "特征最明显", "寻找度最快"]
                },
                {
                    id: 375,
                    question: "解码器最常用的搜索策略为（）。",
                    correctAnswers: ["广度优先搜索"],
                    wrongAnswers: ["期望优先搜索", "时间优先搜索", "概率优先搜索"]
                },
                {
                    id: 376,
                    question: "（）是需求活动和评估活动的重要组成部分。",
                    correctAnswers: ["数据搜集"],
                    wrongAnswers: ["模型制作", "开发过程", "系统映射"]
                },
                {
                    id: 377,
                    question: "在需求活动中，（）适用于了解少数人的意见。",
                    correctAnswers: ["一对一访谈"],
                    wrongAnswers: ["专门小组", "专题讨论", "问卷调查法"]
                },
                {
                    id: 378,
                    question: "问卷调查的适用情形是（）。",
                    correctAnswers: ["回答特定问题"],
                    wrongAnswers: ["深入研究问题", "搜集多方观点", "理解用户活动的环境"]
                },
                {
                    id: 379,
                    question: "（）适用的情形是深入研究问题。",
                    correctAnswers: ["访谈"],
                    wrongAnswers: ["专题讨论", "自然观察", "研究文档"]
                },
                {
                    id: 380,
                    question: "以下数据搜集技术的数据类型只含有定性数据（）。",
                    correctAnswers: ["自然观察"],
                    wrongAnswers: ["问卷调查", "访谈", "专题讨论"]
                },
                {
                    id: 381,
                    question: "数据搜集的重点是标识（）的需要。",
                    correctAnswers: ["当事人"],
                    wrongAnswers: ["开发组", "测试人员", "评估人员"]
                },
                {
                    id: 382,
                    question: "数据标注团队中的职称等级不包括（）。",
                    correctAnswers: ["教授"],
                    wrongAnswers: ["素材收集员", "高级专家", "讲师"]
                },
                {
                    id: 383,
                    question: "完整的数据标注培训体系不包括（）。",
                    correctAnswers: ["设立体罚制度"],
                    wrongAnswers: ["建立严格的培训流程", "有完善的职称等级制度", "设立激励制度"]
                },
                {
                    id: 384,
                    question: "一切培训的目的可分（）和能力培训。",
                    correctAnswers: ["心态培训"],
                    wrongAnswers: ["可靠培训", "职责培训", "方向培训"]
                },
                {
                    id: 385,
                    question: "以下选项不属于企业培训的是（）。",
                    correctAnswers: ["理念培训"],
                    wrongAnswers: ["公开课", "企业内训", "企业咨询"]
                },
                {
                    id: 386,
                    question: "对于零基础数据标注员，在质量提升计划中，数据完成（）条，重点跟进质检，强化培训一次。",
                    correctAnswers: ["3条"],
                    wrongAnswers: ["1条", "2条", "4条"]
                },
                {
                    id: 387,
                    question: "在数据标注员质量提升计划中，强化周期为半天的是（）。",
                    correctAnswers: ["具有1个月以上标注经验的数据标注员"],
                    wrongAnswers: ["零基础标注经验的数据标注员", "具有2周以上标注经验的数据标注员", "具有3周以上标注经验的数据标注员"]
                },
                {
                    id: 388,
                    question: "对于零基础质检员，需要（）试质检期。",
                    correctAnswers: ["2天"],
                    wrongAnswers: ["1天", "3天", "4天"]
                },
                {
                    id: 389,
                    question: "具有（）质检经验的质检员可以成为数据标注员导师。",
                    correctAnswers: ["1个月以上"],
                    wrongAnswers: ["2周以上", "2个月以上", "半年以上"]
                },
                {
                    id: 390,
                    question: "质量提升计划周期为技巧提升的质检员需要（）质检经验。",
                    correctAnswers: ["2个月以上"],
                    wrongAnswers: ["1周以上", "2周以上", "1个月以上"]
                },
                {
                    id: 391,
                    question: "（）是实践教学各个环节所构成的系统，包括实践教学的内容、实践教学的形式以及实践教学师资、基地、教材等构成的教学系统。",
                    correctAnswers: ["实践教学体系"],
                    wrongAnswers: ["实践考核体系", "实践教学", "实践原则"]
                },
                {
                    id: 392,
                    question: "以下不属于实践教学构建的基本原则的是（）。",
                    correctAnswers: ["局部优化的原则"],
                    wrongAnswers: ["相对独立的原则", "注重应用的原则", "产学结合的原则"]
                },
                {
                    id: 393,
                    question: "数据采集流程管理时，项目确立阶段，任命项目经理与（），并申请工程号。",
                    correctAnswers: ["数据收集人"],
                    wrongAnswers: ["部门经理", "各部门员工", "数据分析师"]
                },
                {
                    id: 394,
                    question: "现场采集数据阶段，需要定期到现场进行数据下载检验并（）。",
                    correctAnswers: ["填写下载日志"],
                    wrongAnswers: ["数据归档", "数据分析", "数据总结"]
                },
                {
                    id: 395,
                    question: "（）是指数据在处理、加工之前对数据进行的一系列操作。",
                    correctAnswers: ["数据预处理"],
                    wrongAnswers: ["数据加工", "数据先验", "数据提前加工"]
                },
                {
                    id: 396,
                    question: "数据清洗是指利用现有的数据挖掘手段和方法清洗（），将其转化为满足数据质量要求或应用要求的数据的过程。",
                    correctAnswers: ["脏数据"],
                    wrongAnswers: ["有效数据", "模糊数据", "干扰数据"]
                },
                {
                    id: 397,
                    question: "在数据处理中，以下操作不能加强数据的安全（）。",
                    correctAnswers: ["密码格式单一"],
                    wrongAnswers: ["数据保密", "双向强身份认证", "磁盘阵列"]
                },
                {
                    id: 398,
                    question: "一般情况下，数据是通过表格和（）的方式来呈现的。",
                    correctAnswers: ["图形"],
                    wrongAnswers: ["图片", "文字", "符号"]
                },
                {
                    id: 399,
                    question: "不属于数据分析的作用的是（）。",
                    correctAnswers: ["描述分析"],
                    wrongAnswers: ["现状分析", "原因分析", "预测分析"]
                },
                {
                    id: 400,
                    question: "以下不属于Storm的应用领域的选项是（）。",
                    correctAnswers: ["开发干兆网络技术"],
                    wrongAnswers: ["实时分析", "在线机器学习", "不停顿的计算"]
                },
                {
                    id: 401,
                    question: "Hadoop是一个能够对大量数据进行分布式处理的软件框架。以下不属于其优点的是（）。",
                    correctAnswers: ["高预测性"],
                    wrongAnswers: ["高可靠性", "高扩展性", "高效性"]
                },
                {
                    id: 402,
                    question: "数据标注组需要根据（）类型进行管理。",
                    correctAnswers: ["标注方法"],
                    wrongAnswers: ["数据存储", "工作环境", "结果预测"]
                },
                {
                    id: 403,
                    question: "（）需要对数据从预处理阶段到最终交付期间所有经手的办公人员都进行记录。当发生数据泄漏后，可以清楚的了解到办公人员接触过该数据，并负责环节，这样可以快速锁定调查范围，追查数据泄漏源以及追究责任。",
                    correctAnswers: ["溯源体系"],
                    wrongAnswers: ["追究体系", "排查体系", "数据预处理"]
                },
                {
                    id: 404,
                    question: "以下属于数据清洗组业务模式的是（）。",
                    correctAnswers: ["原始数据的质量检验工作"],
                    wrongAnswers: ["中间数据的过滤工作", "最终数据的归纳工作", "错误数据的修正工作"]
                },
                {
                    id: 405,
                    question: "中央处理器、（）、输入设备和输出设备是组成计算机硬件的四大功能部件。",
                    correctAnswers: ["存储器"],
                    wrongAnswers: ["寄存器", "路由器", "主板"]
                },
                {
                    id: 406,
                    question: "在Windows操作系统中，下列关于文档窗口的描述，正确的是（）。",
                    correctAnswers: ["可以同时打开多个文档窗口，但其中只有一个是活动窗口"],
                    wrongAnswers: ["只能打开一个文档窗口", "可以同时打开多个文档窗口，被打开的窗口都是活动窗口", "可以同时打开多个文档窗口，但在屏幕上只能看见一个文档窗口"]
                },
                {
                    id: 407,
                    question: "计算机网络最突出的优点是（）。",
                    correctAnswers: ["资源共享"],
                    wrongAnswers: ["运算速度快", "运算精度高", "存储容量大"]
                },
                {
                    id: 408,
                    question: "数据操作中，（）不属于连接种类。",
                    correctAnswers: ["中间连接"],
                    wrongAnswers: ["左外连接", "内连接", "交叉连接"]
                },
                {
                    id: 409,
                    question: "对一台计算机来说（）的档次就基本上决定了整个计算机的档次。",
                    correctAnswers: ["CPU"],
                    wrongAnswers: ["内存", "主机", "硬盘"]
                },
                {
                    id: 410,
                    question: "一个字节由（）位二进制信息组成。",
                    correctAnswers: ["8"],
                    wrongAnswers: ["2", "4", "16"]
                },
                {
                    id: 411,
                    question: "硬盘中信息记录介质被称为（）。",
                    correctAnswers: ["盘片"],
                    wrongAnswers: ["磁道", "扇区", "磁盘"]
                },
                {
                    id: 412,
                    question: "1946年世界上有了第一台电子数字计算机，奠定了至今仍然在使用的计算机（）。",
                    correctAnswers: ["体系结构"],
                    wrongAnswers: ["外型结构", "总线结构", "存取结构"]
                },
                {
                    id: 413,
                    question: "当不知道数据所带标签时，可以使用（）技术促使带同类标签的数据与带其他标签的数据相分离。",
                    correctAnswers: ["聚类"],
                    wrongAnswers: ["分类", "关联分析", "隐马尔可夫链"]
                },
                {
                    id: 414,
                    question: "以下关于云计算、大数据和物联网之间的关系，论述错误的是（）。",
                    correctAnswers: ["云计算侧重于数据分析"],
                    wrongAnswers: ["物联网可以借助于云计算实现海量数据的存储", "物联网可以借助于大数据实现海量数据的分析", "云计算、大数据和物联网三者紧密相关，相辅相成"]
                },
                {
                    id: 415,
                    question: "把一个已经打开的文件以新的名字存盘，起备份旧文件的作用，应选（）命令。",
                    correctAnswers: ["另存为"],
                    wrongAnswers: ["自动保存", "保存", "全部保存"]
                },
                {
                    id: 416,
                    question: "关于互联网即时通讯办公室软件说法错误的是（）。",
                    correctAnswers: ["不可以进行员工考勤"],
                    wrongAnswers: ["是中国领先的企业级即时通讯运营平台", "致力于为政府、企业、组织用户提供网络化运营管理服务", "基于即时通讯技术开发而成"]
                },
                {
                    id: 417,
                    question: "对于已感染了病毒的U盘，最彻底的清除病毒的方法是（）。",
                    correctAnswers: ["对U盘进行格式化"],
                    wrongAnswers: ["用酒精将U盘消毒", "放在高压锅里煮", "将感染病毒的程序删除"]
                },
                {
                    id: 418,
                    question: "浏览器中常提到的URL是指（）。",
                    correctAnswers: ["统一资源定位器"],
                    wrongAnswers: ["超文本标记语言", "万维网", "文件传输协议"]
                },
                {
                    id: 419,
                    question: "以下选项中，关于搜索引擎页面设计说法正确的是（）。",
                    correctAnswers: ["首页和目录首页尽量要把重要的内容路径标题展示出来"],
                    wrongAnswers: ["页面一定要放图片", "页面的主题内容越多越好", "页面的文字越多越好"]
                },
                {
                    id: 420,
                    question: "POP指的是电子邮件系统中的（）。",
                    correctAnswers: ["邮件读取协议"],
                    wrongAnswers: ["用户代理", "邮件服务器", "邮件发送协议"]
                },
                {
                    id: 421,
                    question: "以下对HTTP请求方法描述不正确的是（）。",
                    correctAnswers: ["PUT方法会将包含的元素放在所提供的URI下"],
                    wrongAnswers: ["POST请求永远不会被缓存，且对数据长度没有限制", "我们可以从浏览器历史记录中查找到GET请求", "我们无法从浏览器历史记录中查找到POST请求"]
                },
                {
                    id: 422,
                    question: "当物体每秒振动最少20次最多2万次，所发出的声音人耳能听到，这个范围的信号被称为（）。",
                    correctAnswers: ["音频"],
                    wrongAnswers: ["压音信号", "次声波", "超声波"]
                },
                {
                    id: 423,
                    question: "按照CCITT制定的媒体分类标准，属于感觉媒体表现形式的是（）。",
                    correctAnswers: ["显示屏"],
                    wrongAnswers: ["打印机", "软盘", "味觉"]
                },
                {
                    id: 424,
                    question: "在MPC外部设备中，U盘属于（）。",
                    correctAnswers: ["存储设备"],
                    wrongAnswers: ["输入设备", "播放设备", "人机交互设备"]
                },
                {
                    id: 425,
                    question: "多媒体CD光盘上记录信息的轨迹叫光道，信息存储在（）的光道上。",
                    correctAnswers: ["一条渐开的螺旋形"],
                    wrongAnswers: ["一条圆形", "多条同心环形", "多条螺旋形"]
                },
                {
                    id: 426,
                    question: "下列情况中，用人单位可以单方解除劳动合同的是（）。",
                    correctAnswers: ["严重失职、营私舞弊，对用人单位利益造成重大损失"],
                    wrongAnswers: ["患病，在规定的医疗期", "女职工在孕期、产期、哺乳期", "职工患职业病丧失部分劳动能力"]
                },
                {
                    id: 427,
                    question: "在劳动安全卫生法律制度中，劳动者享有的权利不包括（）。",
                    correctAnswers: ["随时撤离权"],
                    wrongAnswers: ["危险因素和应急措施的知情权", "拒绝权", "监督权"]
                },
                {
                    id: 428,
                    question: "抵御电子邮箱入侵措施中,不正确的是（）。",
                    correctAnswers: ["自己做服务器"],
                    wrongAnswers: ["不用生日做密码", "不要使用少于5位的密码", "不要使用纯数字"]
                },
                {
                    id: 429,
                    question: "软件著作权中的（）是指有偿许可他人临时使用软件的权利。",
                    correctAnswers: ["出租权"],
                    wrongAnswers: ["发行权", "复制权", "修改权"]
                },
                {
                    id: 430,
                    question: "以下选项中，属于非结构化数据的是（）。",
                    correctAnswers: ["服务器日志"],
                    wrongAnswers: ["科学仪器报告中的数据", "气象系统数据", "财务系统数据"]
                },
                {
                    id: 431,
                    question: "以下选项中，关于特征工程的评估步骤描述错误的是（）。",
                    correctAnswers: ["无需对性能的改变进行描述"],
                    wrongAnswers: ["在应用之前得到机器学习模型的基准性能", "应用一种或多种特征工程", "对于每种特征工程，获取一个性能指标"]
                },
                {
                    id: 432,
                    question: "我们常将数据分为四个等级，其中（）为我们提供了很多进一步探索的方法。",
                    correctAnswers: ["定序等级"],
                    wrongAnswers: ["定类等级", "定距等级", "定比等级"]
                },
                {
                    id: 433,
                    question: "以下选项中，关于网络爬虫说法错误的是（）。",
                    correctAnswers: ["网络爬虫的系统框架中不包括控制器"],
                    wrongAnswers: ["网络爬虫是一个自动提取网页的程序", "聚焦网络爬虫和通用网络爬虫相比，增加了链接评价模块", "网页的抓取策略可以分为深度优先、广度优先和最佳优先三种"]
                },
                {
                    id: 434,
                    question: "强制访问控制称为（）。",
                    correctAnswers: ["MAC"],
                    wrongAnswers: ["DAC", "RBAC", "RABC"]
                },
                {
                    id: 435,
                    question: "请求的方式GET和POST的描述不正确的是（）。",
                    correctAnswers: ["GET比POST安全"],
                    wrongAnswers: ["GET请求的URL传参有长度限制，而POST请求没有长度限制", "GET使用URL或Cookie传参，而POST将数据放在BODY中", "GET是从服务器上获得数据，而POST则是向服务器传递数据的"]
                },
                {
                    id: 436,
                    question: "顾客的购买行为或Web浏览模式造成数据不一致的原因属于（）。",
                    correctAnswers: ["时效性"],
                    wrongAnswers: ["相关性", "可信性", "可解释性"]
                },
                {
                    id: 437,
                    question: "处理缺省值的方法中，（）最费时，并且当数据集很大时该方法可能行不通。",
                    correctAnswers: ["人工填写缺失值"],
                    wrongAnswers: ["忽略元组", "使用全局常量进行填充", "使用属性的中心度量进行填充"]
                },
                {
                    id: 438,
                    question: "下列关于图像噪声说法错误的是（）。",
                    correctAnswers: ["噪声的产生于图像无关"],
                    wrongAnswers: ["图像的噪声是在获取、存储、处理和传输过程中产生的", "噪声在图像中的分布具有随机性", "噪声具有叠加性"]
                },
                {
                    id: 439,
                    question: "4个评委对于10个选手进行评分，最低为1分，最高为10分，现在分析研究4个评委的打分一致性情况，可以选择（）。",
                    correctAnswers: ["Kendall W协调系数检验"],
                    wrongAnswers: ["Kappa系数检验", "ICC组内相关系数检验", "格兰杰因果检验"]
                },
                {
                    id: 440,
                    question: "主成分分析中各因子的关系是（）。",
                    correctAnswers: ["相互独立"],
                    wrongAnswers: ["线性相关", "非线性相关", "正相关"]
                },
                {
                    id: 441,
                    question: "（）强调通过特征转换得到一组特征。",
                    correctAnswers: ["属性分割"],
                    wrongAnswers: ["特征选择", "特征提取", "属性结合"]
                },
                {
                    id: 442,
                    question: "（）需要利用大规模的已标注语料对模型进行参数训练，包括隐马尔可夫模型。",
                    correctAnswers: ["有监督的学习方法"],
                    wrongAnswers: ["半监督的学习方法", "无监督的学习方法", "混合方法"]
                },
                {
                    id: 443,
                    question: "哈希算法中，取关键字或关键字的某个线性函数值为散列地址称为（）。",
                    correctAnswers: ["直接定址法"],
                    wrongAnswers: ["除留余数法", "数字分析法", "平方取中法"]
                },
                {
                    id: 444,
                    question: "在数据交换过程中，（）是指由给定的属性构造新的属性并添加到属性集中。",
                    correctAnswers: ["属性构造"],
                    wrongAnswers: ["光滑", "聚集", "规范化"]
                },
                {
                    id: 445,
                    question: "（）是指类似流程图的结构，其每个内部结点表示一个属性上的测试。",
                    correctAnswers: ["决策树归纳"],
                    wrongAnswers: ["逐步向上选择", "逐步向后删除", "向前选择和向后删除"]
                },
                {
                    id: 446,
                    question: "传统的数据采集方法的缺点不包括（）。",
                    correctAnswers: ["成本低"],
                    wrongAnswers: ["数据来源单一", "能够存储的数据量小", "采集方式单一"]
                },
                {
                    id: 447,
                    question: "下列选项中，不属于基于触发器的数据抽取方式的优点的是（）。",
                    correctAnswers: ["不会对源数据库构成威胁"],
                    wrongAnswers: ["数据抽取的性能高", "ETL加载规则简单", "不需要修改业务系统表"]
                },
                {
                    id: 448,
                    question: "以下选项不属于原数据存在的问题（）。",
                    correctAnswers: ["数据表示形式单一"],
                    wrongAnswers: ["数据质量差", "数据信息错误多", "文档格式杂"]
                },
                {
                    id: 449,
                    question: "基于统计特征的关键词提取方法不包含（）。",
                    correctAnswers: ["基于词的情感信息的特征量化"],
                    wrongAnswers: ["基于权重的特征化", "基于词的文档位置的特征量化", "基于词的关联信息的特征量化"]
                },
                {
                    id: 450,
                    question: "（）主要是检查数据是否按照规定时间报送。",
                    correctAnswers: ["及时性审核"],
                    wrongAnswers: ["准确性审核", "适用性审核", "一致性审核"]
                },
                {
                    id: 451,
                    question: "提取抛硬币正面朝上的次数时，属于对（）提取。",
                    correctAnswers: ["计数变量"],
                    wrongAnswers: ["二分类变量", "连续型数据", "时间事件变量"]
                },
                {
                    id: 452,
                    question: "（）的整体和部分之间在生命周期上没有什么必然的联系。",
                    correctAnswers: ["聚合"],
                    wrongAnswers: ["依赖", "集成", "分组"]
                },
                {
                    id: 453,
                    question: "数据清洗变得至关重要的原因不包括（）。",
                    correctAnswers: ["数据量级过大"],
                    wrongAnswers: ["数据存在冗余", "数据使用的术语和标准不同", "数据格式不统一"]
                },
                {
                    id: 454,
                    question: "研究大树的纵剖面所见的每个细胞和细胞关系的演变属于（）。",
                    correctAnswers: ["历时语料库"],
                    wrongAnswers: ["平衡语料库", "平行语料库", "共时语料库"]
                },
                {
                    id: 455,
                    question: "在WPS中，函数ABS的功能是（）。",
                    correctAnswers: ["取绝对值"],
                    wrongAnswers: ["取整", "四舍五入", "把公式产生的错误值显示为空"]
                },
                {
                    id: 456,
                    question: "下列选项中，关于yield生成器说法错误的是（）。",
                    correctAnswers: ["相比一次列出所有内容更耗时"],
                    wrongAnswers: ["包含yield语句的函数是一个生成器", "生成器冻结后不在执行未完成的语句", "通过for循环输出值"]
                },
                {
                    id: 457,
                    question: "正则表达式的非打印字符不包括（）。",
                    correctAnswers: ["?"],
                    wrongAnswers: ["\\f", "\\n", "\\s"]
                },
                {
                    id: 458,
                    question: "在网页数据清洗过程中，决策树模型属于（）。",
                    correctAnswers: ["基于分类器的网页抽取算法"],
                    wrongAnswers: ["基于网页模板自动生成的网页抽取算法", "基于启发式规则网页清洗算法", "基于无监督学习的网页抽取算法"]
                },
                {
                    id: 459,
                    question: "下列选项中，关于中文分词叙述错误的是（）。",
                    correctAnswers: ["中文分词不存在分词规范、歧义切分、新词识别等挑战"],
                    wrongAnswers: ["中文分词是在中文句子中的词与词之间加上边界标记", "中文分词由句子到词和由字到词两种方法组成", "分词中的语言模型是由语音、词汇、语法构成的交流模型"]
                },
                {
                    id: 460,
                    question: "下列选项中，关于TF-IDF方法叙述错误的是（）。",
                    correctAnswers: ["很难定位文章的关键字"],
                    wrongAnswers: ["用于资讯检索与文本挖掘的常用加权技术", "可以用来评估一个词对于一个文档集或语料库中某个文档的重要程度", "可用于情感分析"]
                },
                {
                    id: 461,
                    question: "在WPS表格中，新建工作簿的快捷键为（）。",
                    correctAnswers: ["Ctrl+N"],
                    wrongAnswers: ["Ctrl+O", "Ctrl+S", "Ctrl+W"]
                },
                {
                    id: 462,
                    question: "WPS表格中单元格的数据类型不包括（）。",
                    correctAnswers: ["文件"],
                    wrongAnswers: ["文本", "数值", "日期"]
                },
                {
                    id: 463,
                    question: "在WPS表格中，随机排序的操作过程为（）。",
                    correctAnswers: ["添加一个辅助列，输入RAND函数"],
                    wrongAnswers: ["将排序依据设置为单元格颜色，然后选择哪种颜色显示在顶端", "打开排序窗口后，点击添加条件，设置更多的规则即可", "排序前，选中一部分数据，排序时不要扩展区域"]
                },
                {
                    id: 464,
                    question: "WPS表格使用（）汇总方法时，汇总不会自动修改的，用于一次性使用。",
                    correctAnswers: ["使用合并计算按钮"],
                    wrongAnswers: ["使用SUMIF函数", "使用数据透视表", "使用思维导图按钮"]
                },
                {
                    id: 465,
                    question: "WPS表格中，复制操作的快捷键是（）。",
                    correctAnswers: ["Ctrl+C"],
                    wrongAnswers: ["Ctrl+D", "Ctrl+V", "Ctrl+X"]
                },
                {
                    id: 466,
                    question: "下列选项中，用于WPS表格中四舍五入的函数是（）。",
                    correctAnswers: ["ROUND"],
                    wrongAnswers: ["RAND", "VLOOKUP", "IFERROR"]
                },
                {
                    id: 467,
                    question: "WPS表格中，INDIRECT函数表示（）。",
                    correctAnswers: ["引用单元格内容"],
                    wrongAnswers: ["显示当前表格所在路径", "录入当前日期", "计算日期间隔天数"]
                },
                {
                    id: 468,
                    question: "下列选项中，属于层次聚类算法的是（）。",
                    correctAnswers: ["合并法"],
                    wrongAnswers: ["划分聚类", "谱聚类", "统计方法COBWEB"]
                },
                {
                    id: 469,
                    question: "聚类分析过程中，首先要执行的是（）。",
                    correctAnswers: ["选择合适的变量"],
                    wrongAnswers: ["寻找异常点", "计算距离", "选择聚类函数"]
                },
                {
                    id: 470,
                    question: "描述性统计分析的常用指标中，（）体现了数据的离散程度。",
                    correctAnswers: ["方差"],
                    wrongAnswers: ["偏度", "峰度", "中位数"]
                },
                {
                    id: 471,
                    question: "皮尔逊相关系数描述的是线性相关关系，当绝对值为1表示（）。",
                    correctAnswers: ["完全线性相关"],
                    wrongAnswers: ["无线性关系", "正相关", "负相关"]
                },
                {
                    id: 472,
                    question: "探索性分析可视化过程中，（）对于各类别出现次数进行可视化。",
                    correctAnswers: ["柱形图"],
                    wrongAnswers: ["饼图", "箱线图", "散点图"]
                },
                {
                    id: 473,
                    question: "多元回归模型中，（）指的是某一自变量对因变量Y的贡献程度或影响程度。",
                    correctAnswers: ["偏回归平方和"],
                    wrongAnswers: ["方差分析", "决定系数", "复相关系数"]
                },
                {
                    id: 474,
                    question: "卡方检验中四格表的周边合计不变时，如果实际频数有变化，则理论频数（）。",
                    correctAnswers: ["不变"],
                    wrongAnswers: ["增大", "减小", "不确定"]
                },
                {
                    id: 475,
                    question: "（）是基于变异分解的思想进行的。",
                    correctAnswers: ["方差分析"],
                    wrongAnswers: ["方差齐性检验", "线性回归方程整体的显著性检验", "线性回归方程整体分析"]
                },
                {
                    id: 476,
                    question: "T检验中，（）主要用于检验样本中配对数据的差异性。",
                    correctAnswers: ["配对T检验"],
                    wrongAnswers: ["独立样本的T检验", "单一样本的T检验", "回归系数的显著性检验"]
                },
                {
                    id: 477,
                    question: "（）是n个变量值乘积的n次方根。",
                    correctAnswers: ["几何平均数"],
                    wrongAnswers: ["算术平均数", "调和平均数", "位置平均数"]
                },
                {
                    id: 478,
                    question: "（）只考虑了数据中的最大值和最小值，而忽略了全部观察值之间的差异。",
                    correctAnswers: ["极差"],
                    wrongAnswers: ["标准差", "方差", "平均差"]
                },
                {
                    id: 479,
                    question: "在随机试验中，可能出现也可能不出现，而在大量重复试验中具有某种规律性的事件叫做（）。",
                    correctAnswers: ["不确定事件"],
                    wrongAnswers: ["确定事件", "不可能事件", "必然事件"]
                },
                {
                    id: 480,
                    question: "（）是指一个变量的数量变化由另一个变量的数量变化所唯一确定。",
                    correctAnswers: ["完全相关"],
                    wrongAnswers: ["不完全相关", "不相关", "正相关"]
                },
                {
                    id: 481,
                    question: "（）是指概率密度分布曲线在平均值处峰值高低的特征数。直观。",
                    correctAnswers: ["峰度"],
                    wrongAnswers: ["密度", "方差", "均方差"]
                },
                {
                    id: 482,
                    question: "数据种类多，按性质划分，居民地、河流和道路等数据属于（）。",
                    correctAnswers: ["定性数据"],
                    wrongAnswers: ["定位数据", "定量数据", "定时数据"]
                },
                {
                    id: 483,
                    question: "数据种类多，按表现形式划，各种统计或量测数据属于（）。",
                    correctAnswers: ["数字数据"],
                    wrongAnswers: ["模拟数据", "定性数据", "定量数据"]
                },
                {
                    id: 484,
                    question: "下列选项中，关于层次聚类算法说法错误的是（）。",
                    correctAnswers: ["不可以聚类成其他形状"],
                    wrongAnswers: ["距离和规则的相似度容易定义", "不需要预先制定聚类数", "可以发现类的层次关系"]
                },
                {
                    id: 485,
                    question: "（）的聚类方法特点是可以发现球形互斥的族。",
                    correctAnswers: ["基于划分式"],
                    wrongAnswers: ["基于密度式", "基于层次式", "基于网格式"]
                },
                {
                    id: 486,
                    question: "聚类分析在实际应用中的优点不包括（）。",
                    correctAnswers: ["算法不易受数据噪声影响"],
                    wrongAnswers: ["算法成熟可靠", "比较容易用商业和业务的逻辑来理解和解释", "算法具有简介高效的特点"]
                },
                {
                    id: 487,
                    question: "关于聚类算法应用说法错误的是（）。",
                    correctAnswers: ["聚类算法还仅仅停留在理论研究"],
                    wrongAnswers: ["聚类分析的一个重要用途就是针对目标群体进行多指标的群体划分", "利用聚类算法可以在运营活动中为细分群体采取个性化服务", "利用聚类算法可以提升运营的效率和商业效果"]
                },
                {
                    id: 488,
                    question: "以下选项中，属于聚类模型的是（）。",
                    correctAnswers: ["K均值"],
                    wrongAnswers: ["决策树", "随机森林", "支持向量机"]
                },
                {
                    id: 489,
                    question: "分类的评价指标不包括（）。",
                    correctAnswers: ["拟合优度"],
                    wrongAnswers: ["精度", "混淆矩阵", "AUC"]
                },
                {
                    id: 490,
                    question: "数据分类的原则中，在类目的设置上留有适当的余地指的是（）原则。",
                    correctAnswers: ["可扩充性"],
                    wrongAnswers: ["稳定性", "系统性", "兼容性"]
                },
                {
                    id: 491,
                    question: "数据分类的原则中，（）原则保证不同分类体系间的协调一致和转换。",
                    correctAnswers: ["兼容性"],
                    wrongAnswers: ["稳定性", "系统性", "综合实用性"]
                },
                {
                    id: 492,
                    question: "数据可以分为多种不同类型，人的受教育程度就属于（）。",
                    correctAnswers: ["定序数据"],
                    wrongAnswers: ["定类数据", "定距数据", "定比数据"]
                },
                {
                    id: 493,
                    question: "数据可以分为多种不同类型，最高等级为（）。",
                    correctAnswers: ["定比数据"],
                    wrongAnswers: ["定类数据", "定序数据", "定距数据"]
                },
                {
                    id: 494,
                    question: "下列选项中，关于通信信号说法错误的是（）。",
                    correctAnswers: ["半双工方式只允许数据按照一个固定的方向传送"],
                    wrongAnswers: ["串行通信又称为点对点通信", "串行通信是指利用一条传输线将数据一位位地顺序传送", "并行通信是指利用多条传输线将一个数据的各位同时传送"]
                },
                {
                    id: 495,
                    question: "计算机编码方案中，（）只用正的或负的电平表示数据。",
                    correctAnswers: ["单极性码"],
                    wrongAnswers: ["极性码", "归零码", "不归零码"]
                },
                {
                    id: 496,
                    question: "下列选项中，关于JSON文件格式说法错误的是（）。",
                    correctAnswers: ["JSON依赖于语言"],
                    wrongAnswers: ["JSON指的是JavaScript对象表示法", "JSON是轻量级的文本文本交换格式", "JSON具有自我描述性，更易理解"]
                },
                {
                    id: 497,
                    question: "下列选项中，关于CSV文件定义规则说法错误的是（）。",
                    correctAnswers: ["开头是留空的"],
                    wrongAnswers: ["以行为单位", "含或不含列名，含列名则居文件第一行", "一行数据不跨行，无空行"]
                },
                {
                    id: 498,
                    question: "数据质量是保证数据应用的基础，它的评估标准四个方面不包括（）。",
                    correctAnswers: ["冗余性"],
                    wrongAnswers: ["完整性", "一致性", "准确性"]
                },
                {
                    id: 499,
                    question: "以下选项中，关于数据一致性说法错误的是（）。",
                    correctAnswers: ["数据的一致性对于数据分析本身要求并不高"],
                    wrongAnswers: ["数据质量的一致性主要体现在数据记录的规范和数据是否符合逻辑", "一致性的规范指的是数据存在它特定的格式", "一致性的逻辑指的是多项数据间存在着固定的逻辑关系"]
                },
                {
                    id: 500,
                    question: "声音的四个基本特征不包括（）。",
                    correctAnswers: ["音调"],
                    wrongAnswers: ["音色", "音长", "音高"]
                },
                {
                    id: 501,
                    question: "以下选项中，关于声学的基础概念叙述错误的是（）。",
                    correctAnswers: ["波长与发声物体的震动频率成正比"],
                    wrongAnswers: ["声速与传播声音的介质和温度有关", "振幅是指振动物体离开平衡位置的最大距离", "振幅是可变化的"]
                },
                {
                    id: 502,
                    question: "文本标注实时检验方法的优点不包括（）。",
                    correctAnswers: ["对人员的配备及管理要求较低"],
                    wrongAnswers: ["能及时发现问题并解决问题", "能够有效减少标注过程中重复错误的重出现", "能够保证整体标注任务的流畅性"]
                },
                {
                    id: 503,
                    question: "以下选项中，关于视频与图像数据标注的差异说法错误的是（）。",
                    correctAnswers: ["与视频标注相比，图像标注的难度更高"],
                    wrongAnswers: ["视频的数据结构比图像更复杂", "视频的洞察力更强", "视频还可以利用先前帧中的信息来识别可能被部分遮挡的对象"]
                },
                {
                    id: 504,
                    question: "语音识别常用的评估标准中，（）计算方法是句子识别错误的个数，除以总的句子个数。",
                    correctAnswers: ["句错率"],
                    wrongAnswers: ["字错率", "字正确率", "句正确率"]
                },
                {
                    id: 505,
                    question: "语音标注质量评估WER算法的缺点是（）。",
                    correctAnswers: ["数据量大的时候性能较差"],
                    wrongAnswers: ["句错率较高", "对句子的整体性评估优于SER", "可以分数字、英文、中文等情况进行分别标注"]
                },
                {
                    id: 506,
                    question: "文本数据标注质量评估算法CIDEr的优点是（）。",
                    correctAnswers: ["从文本标注质量评估的相关性上升到质量评估的相关性"],
                    wrongAnswers: ["方便、快捷、结果有较大的参考价值", "参考标注越多，待评估数据的相关性越高", "评估时考虑了同义词匹配，提高了评估的准确率"]
                },
                {
                    id: 507,
                    question: "文本数据标注质量评估算法BLEU的缺点是（）。",
                    correctAnswers: ["测评精度易受常用词干扰"],
                    wrongAnswers: ["无法评价标注数据的流畅度", "长度限制", "对所有匹配上的词都同等对待，会导致部分词的重要性削弱"]
                },
                {
                    id: 508,
                    question: "图像数据标注质量评估算法EM的缺点是（）。",
                    correctAnswers: ["数据缺失比例比较大时，收敛速度缓慢"],
                    wrongAnswers: ["没有考虑每个标注任务、标注者的不同可靠性", "需要对标注专家的异质性强加先验", "测评精度易受常用词干扰"]
                },
                {
                    id: 509,
                    question: "图像数据标注质量评估算法RY的缺点是（）。",
                    correctAnswers: ["需要对标注专家的异质性强加先验"],
                    wrongAnswers: ["数据缺失比例比较大时，收敛速度缓慢", "没有考虑每个标注任务、标注者的不同可靠性", "测评精度易受常用词干扰"]
                },
                {
                    id: 510,
                    question: "语音数据标注的分类方法的缺点是（）。",
                    correctAnswers: ["算法无法直接理解语音内容，需要进行文本转录"],
                    wrongAnswers: ["人工识别过程复杂", "相对复杂、耗时", "没有考虑每个标注任务、标注者的不同可靠性"]
                },
                {
                    id: 511,
                    question: "以下选项中，不属于常见的文本数据标注的是（）。",
                    correctAnswers: ["描点标注"],
                    wrongAnswers: ["情感标注", "实体标注", "词性标注"]
                },
                {
                    id: 512,
                    question: "以下选项中，关于质量管理体系的特点说法错误的是（）。",
                    correctAnswers: ["质量管理体系不需要考虑利益"],
                    wrongAnswers: ["是深入细致的质量文件的基础", "代表现代企业思考如何真正发挥质量的作用和如何最优化地作出质量决策的一种观点", "质量体系是使公司内更为广泛的质量活动能够得以切实管理的基础"]
                },
                {
                    id: 513,
                    question: "根据（）的不同，数据标注可以分为结构化标注、非结构化标注和半结构化标注。",
                    correctAnswers: ["数据标注的对象"],
                    wrongAnswers: ["数据标注的构成形式", "数据标注者类型", "数据标注的方式"]
                },
                {
                    id: 514,
                    question: "以下选项中，关于实时检验方法优点说法错误的是（）。",
                    correctAnswers: ["对于人员的配备及管理要求较低"],
                    wrongAnswers: ["能够及时发现问题并解决问题", "能够有效减少标注过程中重复错误的重出现", "能够保证整体标注任务的流畅性"]
                },
                {
                    id: 515,
                    question: "数据标注质量单检验方法中的单位产品是指（）。",
                    correctAnswers: ["可单独描述和考察的事物"],
                    wrongAnswers: ["关于规定的一个或一组要求，或者仅将单位产品划分为合格或不合格", "按照标注对批进行的第一次检验", "聚集在一起的一定数量的某种产品、材料或服务"]
                },
                {
                    id: 516,
                    question: "以下选项中，关于抽样检验和全样检验的区别说法错误的是（）。",
                    correctAnswers: ["经过全检认为合格的一批产品中，可能存在不合格品"],
                    wrongAnswers: ["抽样是根据样本中的产品的检验结果来推断整批产品的质量", "经过抽样检验认为合格的一批产品中，还可能含有一些不合格品", "全样检验需对整批产品逐个进行检验"]
                },
                {
                    id: 517,
                    question: "以下选项中，关于全样检验流程说法错误的是（）。",
                    correctAnswers: ["对于不合格的数据标注，需要返工给质检员"],
                    wrongAnswers: ["全样检验是质检员对全部已完成的数据集进行全样检验", "通过全样检验合格的数据标注存放在已合格数据集中等待交付", "对于不合格的数据标注，需要标注员进行返工改正确标注"]
                },
                {
                    id: 518,
                    question: "以下抽样方法中，不属于系统抽样的是（）。",
                    correctAnswers: ["抽签法"],
                    wrongAnswers: ["间隔定时法", "间隔定量法", "分部比例法"]
                },
                {
                    id: 519,
                    question: "各层样本数的确定方法不包括（）。",
                    correctAnswers: ["调查法"],
                    wrongAnswers: ["分层定比", "奈曼法", "非比例分配法"]
                },
                {
                    id: 520,
                    question: "信息系统的安全等级性质中（）是指信息在传输过程中，不被非法授权修改和破坏，保证数据的一致性。",
                    correctAnswers: ["完整性"],
                    wrongAnswers: ["机密性", "可用性", "用户合法性"]
                },
                {
                    id: 521,
                    question: "以下选项中，对于敏感数据的处理方式错误的是（）。",
                    correctAnswers: ["明文保存用户密码"],
                    wrongAnswers: ["使用对称加密算法保存用户密码", "配合单向散列算法保存用户密码", "独立使用加密服务来做数据加解密"]
                },
                {
                    id: 522,
                    question: "以下选项中，关于《中华人民共和国数据安全法》说法错误的是（）。",
                    correctAnswers: ["对于数据交易进行限制"],
                    wrongAnswers: ["维护数据安全，应当坚持总体国家安全观", "中央国家安全领导机构负责国家数据安全工作的决策和议事协调", "开展数据处理活动，应当遵守法律、法规，尊重社会公德和伦理"]
                },
                {
                    id: 523,
                    question: "数据标注流程中，标注检验的目的是（）。",
                    correctAnswers: ["提高数据输出的准确率"],
                    wrongAnswers: ["去掉重复的、无关的数据", "获取公开的数据集与专业数据集", "对于异常值与缺失值进行查缺补漏"]
                },
                {
                    id: 524,
                    question: "行人标注的难度不包括（）。",
                    correctAnswers: ["图片分辨率大"],
                    wrongAnswers: ["图片模糊看不清", "图片数量过多", "属性过多"]
                },
                {
                    id: 525,
                    question: "骨骼关键点标注是指在图像中或视频中对人体关键点进行（）的过程。",
                    correctAnswers: ["定位和标记"],
                    wrongAnswers: ["识别和分类", "定位和分割", "分类与检测"]
                },
                {
                    id: 526,
                    question: "骨骼关键点标注时，人物裙摆过大，对身体部位有遮挡，臀部的点需要推测标注，此时需要把‘可见性’设为（）。",
                    correctAnswers: ["不可见"],
                    wrongAnswers: ["不可推断", "不可标记", "不可使用"]
                },
                {
                    id: 527,
                    question: "对于手部关键点，从大拇指到小拇指挨个按照从关节到（）的顺序进行标注。",
                    correctAnswers: ["指尖"],
                    wrongAnswers: ["手腕的中心点", "虎口处", "手肘"]
                },
                {
                    id: 528,
                    question: "手部图片由于遮挡导致点不能完全显示，遮挡超过（）的部分不予标注。",
                    correctAnswers: ["80%"],
                    wrongAnswers: ["10%", "50%", "90%"]
                },
                {
                    id: 529,
                    question: "在人脸图片上标注点距离人脸实际的点（）6像素时，标注的图片不准确。",
                    correctAnswers: ["超过"],
                    wrongAnswers: ["小于", "等于", "没有影响"]
                },
                {
                    id: 530,
                    question: "标注工程师在用人脸8点工具标注人脸时，如果不能看到（）的图片，但可以看到眼球的图片，则标注在眼球正中间。",
                    correctAnswers: ["瞳孔"],
                    wrongAnswers: ["眼角", "眼线", "虹膜"]
                },
                {
                    id: 531,
                    question: "（）是指在进行一人所属照片清洗标注时，标注工程师根据关键人物图片提供的性别、年龄等特征，在图库中进行高效清洗，进而快速删除与关键人物不符的照片。",
                    correctAnswers: ["剔除非关键人物"],
                    wrongAnswers: ["确定关键人物", "检查图片数据", "图片清洗"]
                },
                {
                    id: 532,
                    question: "在进行一人所属照片清洗标注时，不可以将（）作为剔除非关键人物的特征信息。",
                    correctAnswers: ["籍贯"],
                    wrongAnswers: ["面部特征", "发型特征", "服饰特征"]
                },
                {
                    id: 533,
                    question: "行人重识别标注的技术难点不包括（）。",
                    correctAnswers: ["高分辨率"],
                    wrongAnswers: ["轨迹碎片化", "光线变化", "角度偏差"]
                },
                {
                    id: 534,
                    question: "以下选项中，关于行人重识别标注说法错误的是（）。",
                    correctAnswers: ["通过标清摄像头获取的视频数据质量相对较高"],
                    wrongAnswers: ["在人流量大的地方容易出现漏掉目标人物的情况", "光线变化会对标注工程师判断目标人物产生影响", "采集数据时间较长，目标人物变化大"]
                },
                {
                    id: 535,
                    question: "（）就是从一段文本中首先找出实体，然后判断两者之间存在的实际关系。",
                    correctAnswers: ["关系标注"],
                    wrongAnswers: ["实体标注", "时间标注", "事件标注"]
                },
                {
                    id: 536,
                    question: "精细分割标注中，（）模式用于查看边缘是否有少标注的情况。",
                    correctAnswers: ["原图模式"],
                    wrongAnswers: ["前景模式", "单物前景模式", "全景模式"]
                },
                {
                    id: 537,
                    question: "属性标注中，按照自己习惯的顺序从上到下寻找图中物体，属于（）方法。",
                    correctAnswers: ["按序查找"],
                    wrongAnswers: ["按大类记忆", "按场景记忆法", "随机记忆"]
                },
                {
                    id: 538,
                    question: "以下选项中，关于构成属性标注困难的原因中，（）属于图片中出现比较杂乱的场景。",
                    correctAnswers: ["办公桌面杂乱"],
                    wrongAnswers: ["行李箱算作衣物", "物体存在倒影", "像素值过低"]
                },
                {
                    id: 539,
                    question: "在使用属性标注工具时，以下（）数据类型最适合进行属性标注。",
                    correctAnswers: ["非结构化数据"],
                    wrongAnswers: ["图像数据", "结构化数据", "音频数据"]
                },
                {
                    id: 540,
                    question: "关于属性标注工具的性能，以下（）描述是正确的。",
                    correctAnswers: ["属性标注工具的性能取决于所使用的算法和模型"],
                    wrongAnswers: ["属性标注工具的性能不受数据规模的影响", "属性标注工具的性能通常低于人工标注", "属性标注工具的性能与人工标注相同"]
                },
                {
                    id: 541,
                    question: "多边形标注能够标注（），在确定顶点后可以任意地改变方向。因此多边形标注能更加精准地反映标注对象的真实形状。",
                    correctAnswers: ["曲线和角度"],
                    wrongAnswers: ["色彩和分辨率", "大小和角度", "曲线和方向"]
                },
                {
                    id: 542,
                    question: "（）是指在静态图片中，使用多边形框，标注出不规则的目标物体，相对于矩形框标注，该标注方法能够更精准地框定目标，同时对于不规则物体，也更具针对性。",
                    correctAnswers: ["多边形标注"],
                    wrongAnswers: ["点云标注", "3D立方体标注", "语义分割"]
                },
                {
                    id: 543,
                    question: "标注工程师在用人脸8点工具标注人脸时，对于闭眼的图片，标注在（）。",
                    correctAnswers: ["眼缝正中间"],
                    wrongAnswers: ["瞳孔四周", "下眼皮", "上眼皮"]
                },
                {
                    id: 544,
                    question: "标注工程师在用人脸8点工具标注人脸时，第6、7点对应的部位是（）。",
                    correctAnswers: ["左右眼角连线与脸部轮廓边缘的交点"],
                    wrongAnswers: ["眼白", "鼻梁", "下巴"]
                },
                {
                    id: 545,
                    question: "在以下手势标注中，不需要拉框的是（）。",
                    correctAnswers: ["平放"],
                    wrongAnswers: ["抱拳", "合十", "交叉"]
                },
                {
                    id: 546,
                    question: "手部关键点检测需要标注的是手部三维状态下的各（）。",
                    correctAnswers: ["中心点"],
                    wrongAnswers: ["随机点", "临近点", "四周围点"]
                },
                {
                    id: 547,
                    question: "关键帧提取方法中，（）是通过随机抽取或在规定的时间间隔内随机抽取视频帧。",
                    correctAnswers: ["基于抽样的提取法"],
                    wrongAnswers: ["全图像序列提取法", "压缩视频提取法", "自定义k值聚类提取法"]
                },
                {
                    id: 548,
                    question: "以下选项中，关于行人重识别合并标注工具中的照片清洗过程说法正确的是（）。",
                    correctAnswers: ["在完成合并后才会进入照片清洗界面"],
                    wrongAnswers: ["不需要对已经合并的轨迹进行检查", "照片清洗不可以进行图片删除", "照片清洗可以随时进行"]
                },
                {
                    id: 549,
                    question: "视频人脸8点标注过程中，对于人脸正常无遮挡的情况下，操作正确的是（）。",
                    correctAnswers: ["正常标注8点"],
                    wrongAnswers: ["标注4点", "标注16点", "不对图像进行标注"]
                },
                {
                    id: 550,
                    question: "在运用3D人脸朝向工具进行人脸识别时，进行（）的目的是消除噪声。",
                    correctAnswers: ["几何校正、中值滤波"],
                    wrongAnswers: ["人脸对准", "灰度值标准化", "人脸对比"]
                },
                {
                    id: 551,
                    question: "精细分割标注中，单物前景模式用于（）。",
                    correctAnswers: ["查看相邻图层的边缘是否有不贴和的情况"],
                    wrongAnswers: ["查看边缘是否有少标注的情况", "查看边缘是否有多标注的情况", "查看边缘是否有错标的情况"]
                },
                {
                    id: 552,
                    question: "语义分割评价指标中，平均交并比是指（）。",
                    correctAnswers: ["每一类像素正确分类的个数除以每一类像素的实际个数"],
                    wrongAnswers: ["每一类像素的精度的平均值", "求出每一类两块区域相交的部分取平均值", "每一类出现的频率作为权重"]
                },
                {
                    id: 553,
                    question: "以下选项中，关于消息中间件Kafka说法错误的是（）。",
                    correctAnswers: ["提供了消息回溯功能"],
                    wrongAnswers: ["是一个高性能跨语言分布式发布和订阅消息队列系统", "只支持主要的MQ功能", "适合产生大量数据的互联网服务的数据收集业务"]
                },
                {
                    id: 554,
                    question: "以下选项中，关于消息中间件ZeroMQ说法错误的是（）。",
                    correctAnswers: ["非持久化消息，对系统的存储空间要求极大"],
                    wrongAnswers: ["针对大吞吐量的需求场景十分有效", "可以构建复杂的队列", "只有消息重传机制，消息易丢失"]
                },
                {
                    id: 555,
                    question: "分布式流平台Kafka的Consumer组件是指（）。",
                    correctAnswers: ["消息的消费者"],
                    wrongAnswers: ["缓存代理", "区分的消息类型", "消息的生产者"]
                },
                {
                    id: 556,
                    question: "聚合运算支持的数据或事件类型中，表示抽样数据的关键字为（）。",
                    correctAnswers: ["Sampling"],
                    wrongAnswers: ["Key/Value", "Gauges", "Counter"]
                },
                {
                    id: 557,
                    question: "下列选项中，关于维度的概念说法错误的是（）。",
                    correctAnswers: ["维度与主题是一对一关系"],
                    wrongAnswers: ["维度表包含维度值和维度属性", "维度值是和事实表关联的主键", "维度属性是此维度所属的分类"]
                },
                {
                    id: 558,
                    question: "多维度聚合函数中，（）函数的功能是指指定维度聚合。",
                    correctAnswers: ["Grouping Sets"],
                    wrongAnswers: ["With Cube", "With Rollup", "GROUP BY"]
                },
                {
                    id: 559,
                    question: "HBase作为实时数据关联的存储和查询引擎，其特点不包括（）。",
                    correctAnswers: ["非开源的"],
                    wrongAnswers: ["是面向列的", "是分布式的", "是一种NoSQL数据库"]
                },
                {
                    id: 560,
                    question: "误差产生的原因不包括（）。",
                    correctAnswers: ["选用错误的数据收集方式产生的误差"],
                    wrongAnswers: ["测量中的误差", "运算和计算机表达中的不精确所引入的机器误差或者舍入误差", "数值方法和离散化带来的误差"]
                },
                {
                    id: 561,
                    question: "造成偶然误差的原因不包括（）。",
                    correctAnswers: ["环境条件的改变"],
                    wrongAnswers: ["实验装置和测量机构在各次调整操作上的变动", "测量仪器指示数值的变动", "估计读数上的变动"]
                },
                {
                    id: 562,
                    question: "绝对值很大的误差出现的概率近于零体现了随机误差具有（）规律。",
                    correctAnswers: ["有界性"],
                    wrongAnswers: ["大小性", "对称性", "抵偿性"]
                },
                {
                    id: 563,
                    question: "基于距离的异常点检测技术的缺点不包括（）。",
                    correctAnswers: ["不适合低维数据"],
                    wrongAnswers: ["只能找出异常点，无法找出异常簇", "不适合大数据及在线应用", "参数K和阈值需要人工调参"]
                },
                {
                    id: 564,
                    question: "一般情况下，故障显示灯呈现（）时，表示严重故障状态。",
                    correctAnswers: ["红色"],
                    wrongAnswers: ["绿色", "淡蓝色", "黄色"]
                },
                {
                    id: 565,
                    question: "故障定位的手段中，（）是指将一部分网络设备隔离，利用设备正常的输入输出端口和测试器，系统地测试被隔离网络设备的所有服务特性。",
                    correctAnswers: ["试运行"],
                    wrongAnswers: ["诊断", "软件检查", "软件更新"]
                },
                {
                    id: 566,
                    question: "基于决策树的故障诊断的评价指标是（）。",
                    correctAnswers: ["Kappa统计、显著性检验"],
                    wrongAnswers: ["均方误差、均方根误差", "支持度、置信度", "平均绝对误差、相对误差"]
                },
                {
                    id: 567,
                    question: "以下选项中，关于数据整合说法错误的是（）。",
                    correctAnswers: ["数据规则不可以在数据加载、转换中实施"],
                    wrongAnswers: ["底层数据结构透明", "性能和扩展性高", "可重用性好"]
                },
                {
                    id: 568,
                    question: "系统管理除包括管理具体系统相关的内容外，还包括配置管理、变更管理、（）。",
                    correctAnswers: ["文档管理"],
                    wrongAnswers: ["容器管理", "服务器指南", "存储管理"]
                },
                {
                    id: 569,
                    question: "软件配置管理是贯穿于整个软件过程中的保护性活动，它被设计的用途不包括（）。",
                    correctAnswers: ["保证变化被完全发现"],
                    wrongAnswers: ["标识变化", "控制变化", "向其他人员报告变化"]
                },
                {
                    id: 570,
                    question: "（）帮助进行快速而准确的影响度分析，从而可以更快速而有效地处理变更。",
                    correctAnswers: ["配置管理"],
                    wrongAnswers: ["配置关联", "组件设置", "项目设计"]
                },
                {
                    id: 571,
                    question: "配置管理时配置数据库可以提供有关维护成本和维护合同、许可证等信息，这样做的意义是（）。",
                    correctAnswers: ["更精确地制定计划"],
                    wrongAnswers: ["识别非法病毒，防止非法复制", "支持可用性管理", "支持能力管理流程"]
                },
                {
                    id: 572,
                    question: "配置管理流程中，（）是指为其他流程提供信息，并报告配置项使用的趋势和发展情况。",
                    correctAnswers: ["报告"],
                    wrongAnswers: ["规划", "识别", "控制"]
                },
                {
                    id: 573,
                    question: "配置管理流程可以划分为六个步骤，最后一步的是（）。",
                    correctAnswers: ["报告"],
                    wrongAnswers: ["规划", "状态记录", "核实"]
                },
                {
                    id: 574,
                    question: "文档管理包括运维报告文档、（）、运维管理文档和系统调试文档。",
                    correctAnswers: ["技术支持文档"],
                    wrongAnswers: ["主动问题管理文档", "问题控制文档", "错误控制文档"]
                },
                {
                    id: 575,
                    question: "配置管理文档中，可用性管理报告不包括（）信息。",
                    correctAnswers: ["平均解决时间"],
                    wrongAnswers: ["故障的次数", "平均修复时间", "总体正常运作时间"]
                },
                {
                    id: 576,
                    question: "数据分析方法方法中，（）是指将两个及两个以上的数据进行比较，分析它们的差异，从而揭示这些数据所代表的事物发展变化情况和规律性。",
                    correctAnswers: ["对比分析法"],
                    wrongAnswers: ["分组分析法", "预测分析法", "漏斗分析法"]
                },
                {
                    id: 577,
                    question: "对比分析方法中，（）是指同一空间条件下，对不同时期数据的比较。",
                    correctAnswers: ["纵比"],
                    wrongAnswers: ["同比", "环比", "横比"]
                },
                {
                    id: 578,
                    question: "组距式分组需要确定分组的关键要素中，（）是指每一组的上限与下限之间的距离。",
                    correctAnswers: ["组距"],
                    wrongAnswers: ["组数", "组限", "组中值"]
                },
                {
                    id: 579,
                    question: "以下选项中，（）是运用各种定性和定量的分析理论与方法，对事物未来发展的趋势和水平进行判断和推测的一种活动。",
                    correctAnswers: ["预测分析法"],
                    wrongAnswers: ["对比分析法", "分组分析法", "漏斗分析法"]
                }
                ];


// 多选题题库
const multipleChoiceQuestions = [
    {
        id: 1,
        question: "下列对职业道德的表述不正确的是（）。",
        options: ["职业道德是在职业活动中调节人与人之间关系的特殊行为规范", "职业道德是主观思考的产物，没有客观依据", "每个人都有各自的职业道德观念，以共同的职业道德规范要求他人是不正确的", "职业道德同法律一样，必须在外在规范的约束下才能发挥作用", "职业道德与市场规范相违背，不利于市场的发展"],
        correct: [1, 2, 3, 4]
    },
    {
        id: 2,
        question: "如果一种企业文化没有被企业中全体或大多数员工所接受，那么这种企业文化就不符合企业文化优劣形式标准中的（）。",
        options: ["系统性", "认同性", "稳定性", "统一性", "一致性"],
        correct: [0, 2, 3]
    },
    {
        id: 3,
        question: "办事公道是指职工在进行职业活动时要做到（），下列表述不正确的是。",
        options: ["追求真理，坚持原则", "有求必应，助人为乐", "公私不分，一切平等", "知人善任，提拔知己", "拉帮结派，打压员工"],
        correct: [1, 2, 3, 4]
    },
    {
        id: 4,
        question: "法律的主要特征有（）。",
        options: ["制定法律的机关的最高权威性", "任何时代、任何国家的法律总是体现统治阶级的意志的", "法律是调整人们行为的一种行为规范，通过对人们行为的调整来实现对社会关系的调整", "法律的约束性是最广泛、最普遍的", "法律是以国家强制力保证实施的规范，是运用法律规范来调整社会关系和维护社会秩序"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 5,
        question: "生产经营单位与从业人员订立劳动合同应载明有关的事项包括（）。",
        options: ["保障从业人员劳动安全", "防止职业危害的事项", "为从业人员办理工伤保险", "免责条款", "伤害量化平均条款"],
        correct: [0, 1, 2]
    },
    {
        id: 6,
        question: "下列对于诚实守信说法正确的是（）。",
        options: ["诚实守信就是要重承诺，信守诺言，忠实地履行自己应承担的义务", "诚实守信是市场经济的内在法则", "诚实守信要敢于讲真话，坚持真理", "诚实守信与市场经济的根本目的相矛盾", "诚实守信不符合市场经营潜规则要求"],
        correct: [0, 1, 2]
    },
    {
        id: 7,
        question: "以下不是构成CPU的主要部件（）。",
        options: ["高速缓存和运算器", "闪存和控制器", "控制器和运算器", "输入输出设备", "硬盘"],
        correct: [1, 3, 4]
    },
    {
        id: 8,
        question: "计算机操作系统通道可以完成（）之间的数据传输。",
        options: ["外设", "内存", "CPU", "主存", "编译器"],
        correct: [0, 1]
    },
    {
        id: 9,
        question: "以下选项是计算机拓扑结构（）。",
        options: ["总线结构", "星型结构", "环形结构", "双线结构", "树型结构"],
        correct: [0, 1, 2, 4]
    },
    {
        id: 10,
        question: "本地计算机被感染病毒的途径可能是以下方式（ ）。",
        options: ["使用软盘", "软盘表面受损", "机房电源不稳定", "上网", "共用外设"],
        correct: [0, 3, 4]
    },
    {
        id: 11,
        question: "ORACLE数据库物理结构包括（）。",
        options: ["数据文件", "日志文件", "控制文件", "临时文件", "冗余文件"],
        correct: [0, 1, 2]
    },
    {
        id: 12,
        question: "计算机病毒的特点有以下特性（）。",
        options: ["传染性", "潜伏性", "破坏性", "针对性", "级联性"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 13,
        question: "对于WPS表格描述以下选项是正确的（）。",
        options: ["WPS表格的应用程序可同时打开多个工作簿文档", "在同一个工作簿文档窗口可以建立多张工作表", "在同一个工作表中可以为多个数据区域命名", "WPS表格不可进行剪切操作", "WPS表格无法进行数据统计工作"],
        correct: [0, 1, 2]
    },
    {
        id: 14,
        question: "发现计算机感染病毒后，以下选项不是彻底清除病毒的方式（）。",
        options: ["用查毒软件处理", "删除文件", "格式化磁盘", "重启电脑", "关闭电源"],
        correct: [0, 1, 3, 4]
    },
    {
        id: 15,
        question: "微信的出现丰富了人们的交流方式，以下说法是正确的（）。",
        options: ["可以扫描对方微信二维码添加好友", "无法与非好友进行通话", "关注微信公众号，可以查看推送文章", "可以转发文章分享至朋友圈", "可以为微信好友设置分组"],
        correct: [0, 2, 3, 4]
    },
    {
        id: 16,
        question: "搜索引擎的工作原理有（）。",
        options: ["爬行", "抓取存储", "预处理", "排名", "网页名称"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 17,
        question: "电子邮箱常用的功能包括（）。",
        options: ["收发信件", "布告栏", "直接投送", "漫游功能", "文件传输"],
        correct: [0, 2, 3, 4]
    },
    {
        id: 18,
        question: "下载工具主流的协议有以下选项（）。",
        options: ["P2P协议", "BT协议", "ED2K", "HTTP协议", "SMTP协议"],
        correct: [0, 1, 2]
    },
    {
        id: 19,
        question: "Winamp媒体播放器支持的音频格式包含以下选项 （ ）。",
        options: ["MP3", "MP2", "RM", "XM", "ZIP"],
        correct: [0, 1, 3]
    },
    {
        id: 20,
        question: "网络运营者应当制定网络安全事件应急预案，及时处置（）安全风险，在发生危害网络安全的事件时，立即启动应急预案，采取相应的补救措施，并按照规定向有关主管部门报告。",
        options: ["系统漏洞", "网络攻击", "网络入侵", "计算机病毒", "系统断电"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 21,
        question: "修改权是指对软件进行以下操作（）。",
        options: ["增补", "删节", "改变指令", "改变语句顺序", "标明金额"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 22,
        question: "中国互联网络信息中心提供互联网络（）等有关信息服务。",
        options: ["地址", "域名", "网络资源目录管理", "黑客技术", "用户资料"],
        correct: [0, 1, 2]
    },
    {
        id: 23,
        question: "以下选项对于Informatica低层架构特点描述是正确 的（ ）。",
        options: ["schemamapping非自动", "可复制性较差", "更新换代不是很强", "依赖外部环境", "容错性小"],
        correct: [0, 1, 2]
    },
    {
        id: 24,
        question: "以下选项属于支持自动断点续传的ETL数据整合主流工具()。",
        options: ["DataPipeline", "Oracle Goldengate", "Kettle", "Informatica", "MySql"],
        correct: [0, 1]
    },
    {
        id: 25,
        question: "将分布的、异构数据源中的数据抽取至临时中间层后，进行（）等操作，最后将数据加载到目标数据库或数据文件。以下选项是正确的。",
        options: ["清洗", "转换", "继承", "抽取", "存储"],
        correct: [0, 1, 2]
    },
    {
        id: 26,
        question: "“从以前的结果获取文件”组件在（）等处理、使用或者创建一个文件时，文件被捕获并附加到结果。",
        options: ["转换", "任务", "文件细节", "任务条目", "字段"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 27,
        question: "数据整合可分为使用（）方式，以下选项是正确的。",
        options: ["工具软件", "设备", "编程", "代码", "表格"],
        correct: [0, 2]
    },
    {
        id: 28,
        question: "组件数据发送可以设置为（）发送。",
        options: ["轮流", "替换", "复制", "查找", "验证"],
        correct: [0, 2]
    },
    {
        id: 29,
        question: "数据采集案例之人体姿势采集场景办公室过道采集，以下选项是人体姿态采集要求（）。",
        options: ["单人全身出境", "不遮挡面部", "站立于过道中间", "不依靠两侧墙体或其他物体", "双手环抱"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 30,
        question: "在数据清洗过程中，应对所获取的数据进行筛选，以下选项是正确的（）。",
        options: ["去掉重复", "无关数据", "补全缺失数据", "平滑噪声数据", "最大限度纠正数据的不一致性和不完整性"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 31,
        question: "以下选项是插补缺失值的常用方法（）。",
        options: ["均值插补", "方差插补", "同类均值插补", "正态分布插补", "泊松分布插补"],
        correct: [0, 2]
    },
    {
        id: 32,
        question: "以下方法可以用来识别可能代表噪声的离群点（）。",
        options: ["数据统计描述", "数据可视化", "数据异常值剔除", "插补缺失值", "数据清洗"],
        correct: [0, 1]
    },
    {
        id: 33,
        question: "特征归约处理的效果包含以下（）。",
        options: ["更少的数据和更高的挖掘效率", "更高的数据挖掘处理精度", "简单的数据挖掘处理结果", "更少的特征", "最优值评估"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 34,
        question: "有参的特征值归约包含以下选项（）。",
        options: ["回归", "聚类", "对数线性函数", "格式化", "分类"],
        correct: [0, 2]
    },
    {
        id: 35,
        question: "可采用以下方式进行数据平滑（）。",
        options: ["分箱", "聚类", "回归", "挖掘", "构造"],
        correct: [0, 1, 2]
    },
    {
        id: 36,
        question: "以下属于决策树剪枝的基本策略（）。",
        options: ["预剪枝", "决策划分", "后剪枝", "基尼指数抽样", "随机剪枝"],
        correct: [0, 2]
    },
    {
        id: 37,
        question: "数据采集系统维护性能上主要考虑其以下方面的因素（ ）。",
        options: ["运行效率", "安全性", "稳定性", "健壮性", "鲁棒性"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 38,
        question: "由于当下电子设备的技术革新和普遍应用，更多的（）信息出现在信息源中。",
        options: ["图像", "音频", "视频", "文本", "图片"],
        correct: [0, 1, 2]
    },
    {
        id: 39,
        question: "增量抽取的模式包含以下选项（）。",
        options: ["时间戳方式", "全表对比方式", "触发器方式", "日志表方式", "字段记录方式"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 40,
        question: "混合精度训练模型采用以下精度算法（）。",
        options: ["保留权重的单精度副本", "激活梯度精度算法", "损失定标精度算法", "权重更新精度算法", "改进精度算法"],
        correct: [0, 2, 4]
    },
    {
        id: 41,
        question: "业务流程优化包括以下过程（）。",
        options: ["现有工作流程梳理", "提高", "完善", "改进", "均衡"],
        correct: [0, 2, 3]
    },
    {
        id: 42,
        question: "业务流程优化的核心问题包括以下选项（）。",
        options: ["企业信息化管理平台建设失败", "管理信息系统缺乏统一规划，领导重视程度不够", "物流配送流程不合理，导致供货周期长，客户不满意", "采购业务环节控制不力，导致采购成本高、质量下降", "工作流不畅，工作方法经验化，协调多"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 43,
        question: "流程优化的实施包含以下方面（）。",
        options: ["总体规划", "优化项目启动", "流程描述及诊断分析", "配套方案设计", "项目评测"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 44,
        question: "数据清洗时，应对所采集的数据及时进行（），方可使用数据。",
        options: ["聚类", "筛选", "聚集", "去重复", "去无关"],
        correct: [1, 3, 4]
    },
    {
        id: 45,
        question: "数据标注可以分为以下（）。",
        options: ["文本标注", "音频标注", "图像标注", "视频标注", "动画标注"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 46,
        question: "数据标注的应用场景有以下（）。",
        options: ["安防领域", "金融领域", "电子商务领域", "公共服务领域", "出行领域"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 47,
        question: "数据标注管理需要在项目以下方面做好管控 （ ）。",
        options: ["时间", "成本", "质量", "沟通", "人员"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 48,
        question: "人工智能训练算法一般需要以下数据集类别 （ ）。",
        options: ["训练集", "测试集", "迭代集", "验证集", "优化集"],
        correct: [0, 1, 3]
    },
    {
        id: 49,
        question: "目前主流的数据标注方法是数据标注员根据数据标注需求，借助相关数据标注工具在数据上完成以下方面的工作（）。",
        options: ["分类", "数据标记", "画框", "注释", "数据清洗"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 50,
        question: "常用的数据标准化方法有以下（）。",
        options: ["离差标准化", "标准差标准化", "小数定标标准化", "函数转换", "映射归一化"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 51,
        question: "数据合并的方式有以下（）。",
        options: ["字段删除", "数据堆叠", "主键合并", "数据连接", "冗余检测"],
        correct: [1, 2]
    },
    {
        id: 52,
        question: "以下选项属于数据清洗过程中针对缺失值常用方法（ ）。",
        options: ["数据变换", "不处理", "删除", "异常值检测", "数据插补"],
        correct: [0, 1, 2, 4]
    },
    {
        id: 53,
        question: "以下选项是常用的插值法（）。",
        options: ["分段线性插值法", "拉格朗日插值法", "牛顿插值法", "样条插值法", "字段插值法"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 54,
        question: "图像标注的应用领域包括以下选项（）。",
        options: ["车辆车牌标注", "人像识别标注", "医疗影像标注", "机械影像标注", "遥感图像标注"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 55,
        question: "对于语音标注的数据集，（）的设置在一定范围内越高越好。",
        options: ["采样率", "声波", "分贝", "振幅", "采样精度"],
        correct: [0, 4]
    },
    {
        id: 56,
        question: "细胞标注需要为每个（）添加标签。",
        options: ["细胞质", "细胞壁", "细胞核", "细胞体", "细胞膜"],
        correct: [0, 2]
    },
    {
        id: 57,
        question: "子集搜索方法主要涉及以下（）两个方面的关键环节。",
        options: ["如何生成候选子集", "候选子集的搜索空间大小", "如何评价候选子集", "候选子集构建时间复杂度", "如何优化候选子集"],
        correct: [0, 2]
    },
    {
        id: 58,
        question: "数据平滑一般可采用以下方法（）。",
        options: ["分箱", "聚类", "回归", "汇总", "最小二乘"],
        correct: [0, 1, 2]
    },
    {
        id: 59,
        question: "信息量的度量采用最小熵，其中信息是指（）所表示的内容，用以消除对客观事物认识的不确定性。",
        options: ["信号", "符号", "消息", "回归", "采样"],
        correct: [0, 1, 2]
    },
    {
        id: 60,
        question: "根据执行数据去重操作的网络节点区分，数据去重可以分为（）。",
        options: ["采样去重", "服务器端去重", "文件级去重", "客户端去重", "数据块级去重"],
        correct: [1, 3]
    },
    {
        id: 61,
        question: "数据标注是对（）等待标注数据进行处理。",
        options: ["文本", "图像", "语音", "视频", "信号"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 62,
        question: "语音处理工具主要功能是实现（）。",
        options: ["录音", "混音", "剪辑", "转换", "录制"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 63,
        question: "NLP发展过程中亟待解决的问题是（）。",
        options: ["中文分词", "词义消歧", "文本的二义性", "文本的相似性", "词向量技术"],
        correct: [0, 1, 2]
    },
    {
        id: 64,
        question: "常用的文本标注有以下形式（）。",
        options: ["情感标注", "实体标注", "词性标注", "语音标注", "图片标注"],
        correct: [0, 1, 2]
    },
    {
        id: 65,
        question: "（）等因素会较大影响语音转写的难度。",
        options: ["语音长短", "声音质量", "有无预打标结果", "是否需要切割", "是否需要标注"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 66,
        question: "下面对JSON文档叙述正确的是（）。",
        options: ["Object是一个无序的“名称/值对”集合", "一个对象以“[”开始，以“]”结束", "每个“名称”后跟一个“：”", "“名称/值对”之间使用“，”分隔", "一个数组以“[”开始，以“]”结束"],
        correct: [0, 2, 3, 4]
    },
    {
        id: 67,
        question: "以下选项属于测试计划的主要内容（）。",
        options: ["明确测试范围", "制定测试方法", "分配测试资源", "评估测试风险", "制定发布标准"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 68,
        question: "总结测试报告的主要内容包括各测试版本的 （ ）。",
        options: ["问题概要", "质量情况概况统计", "缺陷分布统计", "风险分析", "测试用例设计与执行"],
        correct: [1, 2, 3]
    },
    {
        id: 69,
        question: "一般算法测试报告由以下要素组成（）。",
        options: ["算法功能测试结果", "算法预测结果分析", "算法性能测试结果", "算法模型评估指标结果", "算法指标结果分析"],
        correct: [0, 2, 3, 4]
    },
    {
        id: 70,
        question: "白盒测试用例设计方法主要有（）。",
        options: ["流程设计法", "逻辑覆盖法", "基本路径法", "边界值分析法", "错误推测法"],
        correct: [1, 2]
    },
    {
        id: 71,
        question: "以下评价方法在大多数情况下均为不彻底的交叉验证法（）。",
        options: ["蒙特卡洛交叉验证", "留一法", "k折交叉验证", "装袋法", "提升法"],
        correct: [0, 2]
    },
    {
        id: 72,
        question: "当使用Sigmoid激励函数时，如果权重初始化较小或较大时，训练过程容易出现（）的问题。",
        options: ["梯度饱和", "梯度消失", "矩形缺失", "环形饱和", "梯度下降"],
        correct: [0, 1]
    },
    {
        id: 73,
        question: "对算法的学习包括以下方面（）。",
        options: ["设计算法", "表示算法", "确认算法", "分析算法", "验证算法"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 74,
        question: "算法正确性是对任意一个合法的输入经过有限步执行之后算法应给出正确的结果。其中“正确”的含义包括（）。",
        options: ["算法对几组不同的输入数据能够得出满足要求的结构", "算法对于精心选择的典型、苛刻而带有刁难性的输入数据能够得出满足要求的结果", "算法对题目的合理性能够给出证明", "算法对于一切合法的输入数据都产生满足要求的结果", "证明关于输入与输出之关系的命题是正确的"],
        correct: [0, 1, 3, 4]
    },
    {
        id: 75,
        question: "模型评价中，通过确定下一步，可以得到以下结果（ ）。",
        options: ["可能活动列表", "核准模型", "重审报告", "最终决定", "根据商业成功标准评价机器学习的结果"],
        correct: [0, 2]
    },
    {
        id: 76,
        question: "以下属于算法优化的方法的是（）。",
        options: ["梯度下降法", "随机搜索", "遗传算法", "模拟退火算法", "蚁群算法"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 77,
        question: "以下选项属于一个算法的控制结构（）。",
        options: ["顺序", "分支", "循环", "矩阵", "梯度"],
        correct: [0, 1, 2]
    },
    {
        id: 78,
        question: "以下可视化属于可视化分析中的领域方法（）。",
        options: ["地理信息可视化", "空间数据可视化", "文本数据可视化", "跨媒体数据可视化", "实时数据可视化"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 79,
        question: "以下可视化分析工具不需要编程 ()。",
        options: ["Tableau", "Raw", "Chart.js", "Processing", "Facets"],
        correct: [0, 1]
    },
    {
        id: 80,
        question: "常见的差异可视化图包括（）。",
        options: ["热图", "箱图", "平行坐标", "折线图", "直方图"],
        correct: [0, 1, 2]
    },
    {
        id: 81,
        question: "算法的评价主要从（）来考虑。",
        options: ["时间复杂度", "运行行数", "循环次数", "空间复杂度", "可读性"],
        correct: [0, 3]
    },
    {
        id: 82,
        question: "算法度量的内部指标，下列选项不包括（）。",
        options: ["切比雪夫距离", "欧式距离", "紧密度", "Rand统计量", "簇描述"],
        correct: [3, 4]
    },
    {
        id: 83,
        question: "泛化误差估计方法主要有以下（）。",
        options: ["系统误差估计", "训练误差估计", "结合模型复杂度估计", "估计统计上限", "使用检验集"],
        correct: [1, 2, 3, 4]
    },
    {
        id: 84,
        question: "用于分类的神经网络算法的评价指标有（）。",
        options: ["准确率", "召回率", "AUC", "ROC", "RSquare"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 85,
        question: "Adam首先计算梯度的（）估计，并据此为不同参数设置独立的自适应学习率。",
        options: ["一阶矩", "二阶矩", "三阶矩", "0阶矩", "环形矩"],
        correct: [0, 1]
    },
    {
        id: 86,
        question: "数据增强最简单的方法就是对代表本质特征的样本进行复制或随机删除，而在深度学习的图像识别中，常用（）等方法增加训练样本。",
        options: ["图像水平移动", "图像垂直移动", "图像缩小", "图像放大", "图像翻转"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 87,
        question: "优化超参数的难点在于（）。",
        options: ["每个类型的超参数都有很多选择", "数据规模较大", "构建的模型结构复杂", "数据流量较少", "分析逻辑困难"],
        correct: [0, 1, 2]
    },
    {
        id: 88,
        question: "模型结构风险最小化，如果要结构风险小，要求（）同时小。",
        options: ["期望风险", "结构风险", "经验风险", "模型复杂度", "参数矩阵"],
        correct: [1, 2, 3]
    },
    {
        id: 89,
        question: "二项分布X~B (BCn, p)的数学期望和方差分别为()。",
        options: ["p", "np", "np(1-p)", "p(1-p)", "p(1-np)"],
        correct: [1, 2]
    },
    {
        id: 90,
        question: "标准误差算的是（）之间的偏差。",
        options: ["观测值与其真值", "观测值与其模拟值", "观测值与其平均值", "模拟值与其平均值", "真值与其模拟值"],
        correct: [0, 1]
    },
    {
        id: 91,
        question: "以下过程属于回归分析（）。",
        options: ["确定输入变量与目标变量之间的回归模型", "根据样本估计并检验回归模型及未知参数", "从输入变量中判断哪些变量对目标变量的影响 是显著的", "根据输入变量的已知值来估计目标变量的平均 值并给出预测精度", "验证是否为最优估计器"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 92,
        question: "分组分析法是指通过统计分组的计算和分析，来认识所要分析对象的（）的方法。",
        options: ["相互关系", "相同特征", "相同性质", "不同特征", "不同性质"],
        correct: [0, 3, 4]
    },
    {
        id: 93,
        question: "预测分析法大致可以分为（）。",
        options: ["基于时间序列的预测", "基于分组对比的预测", "回归类预测", "基于各环节转换率的预测", "两种相似样本的结果对比预测"],
        correct: [0, 2]
    },
    {
        id: 94,
        question: "t检验可以验证样本（）。",
        options: ["均值是否满足某个常数", "是否服从正态分布", "两样本是否不相关", "间的均值是否存在差异", "是否服从柏松分布"],
        correct: [0, 3]
    },
    {
        id: 95,
        question: "以下检验方法可以验证样本是否服从正态性分布 （ ）。",
        options: ["t检验", "卡方检验", "Pearson检验", "Shapiro检验", "KS检验"],
        correct: [3, 4]
    },
    {
        id: 96,
        question: "正态曲线由以下参数决定（）。",
        options: ["均值", "协方差", "方差", "偏态系数", "变差系数"],
        correct: [0, 2]
    },
    {
        id: 97,
        question: "贝叶斯分类器是（）的分类器。",
        options: ["支持增量式训练", "对分类器实际学习的解释相对简单", "分类错误概率最小", "在预先给定代价的情况下平均风险最小", "对分类器实际学习的解释相对复杂"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 98,
        question: "方差分为以下种类（）。",
        options: ["数值型方差", "概率型方差", "离散型方差", "连续型方差", "边缘型方差"],
        correct: [2, 3]
    },
    {
        id: 99,
        question: "以下能帮助减少特征的维度、数据冗余，以及在特征提取时能发现更有意义的特征属性的方法是 （ ）。",
        options: ["特征转换", "特征选择", "特征提取", "特征子集", "特征筛选"],
        correct: [1, 2]
    },
    {
        id: 100,
        question: "描述性统计分析适用于以下数据特征的分析 （ ）。",
        options: ["数据的可行范围", "数据的波动分散程度", "某支付渠道占比", "探索汽车速度与刹车距离之间的关系", "某品牌充电宝是否虚假宣传"],
        correct: [0, 1]
    },
    {
        id: 101,
        question: "箱型图有以下作用（）。",
        options: ["观察出某变量占总体的比值", "方便实现数据的对比", "识别出数据中的异常样本点", "了解数据的规律", "表达出数据的统计特征"],
        correct: [1, 2]
    },
    {
        id: 102,
        question: "在处理（）情况时，传统聚类方法往往会失效。",
        options: ["一维数据", "高维数据", "大型数据", "低维数据", "小型数据"],
        correct: [1, 2]
    },
    {
        id: 103,
        question: "使用Tableau时，条形图的“编辑颜色”对话框中，有以下选择（）。",
        options: ["颜色", "不透明度", "效果", "字符大小", "字体格式"],
        correct: [0, 1, 2]
    },
    {
        id: 104,
        question: "数据可视化可以用以下图标格式（）。",
        options: ["柱形图", "折线图", "饼图", "散点图", "气泡图"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 105,
        question: "面积图包含以下图形因素（）。",
        options: ["标题", "图表区", "绘图区", "坐标轴", "网格线"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 106,
        question: "描述性统计的指标包括以下选项（）。",
        options: ["观测数", "最大K值", "置信度", "标准差", "最小值"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 107,
        question: "人机界面设计应该考虑以下原则（）。",
        options: ["以用户为中心的基本设计原则", "顺序原则", "功能原则", "一致性原则", "重要性原则"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 108,
        question: "在多通道交互中，用户可以使用（）等自然的交互方式与计算机系统进行通信。",
        options: ["界面", "语音", "手势", "眼神", "表情"],
        correct: [1, 2, 3, 4]
    },
    {
        id: 109,
        question: "以下选项是图形用户界面中的图形元素（）。",
        options: ["按钮", "图表", "滚动条", "窗口", "链接"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 110,
        question: "交互设计中有以下规范要求（）。",
        options: ["标题规范", "新窗口链接规范", "图片规范", "信息规范", "控件规范"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 111,
        question: "交互设计分析阶段包含以下过程（）。",
        options: ["需求分析", "用户场景模拟", "竞品分析", "人员分析", "系统分析"],
        correct: [0, 1, 2]
    },
    {
        id: 112,
        question: "以下交互产品需要具有易学特征的是（）。",
        options: ["一种移动设备，儿童们在进行协作游戏时可以 使用它来相互交流", "计算机化的电视会议系统，允许学生们在家中 听课", "互联网应用，公众可通过交互式电视检索自己 的病历", "供建筑师和工程师使用的CAD系统", "为失去亲友的人提供在线帮助的网上社团"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 113,
        question: "设计活动需要考虑以下因素（）。",
        options: ["材料", "成本", "可行性", "产品的目标应用域", "产品的应用"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 114,
        question: "交互设计中，Eason把用户分为以下种类（）。",
        options: ["主要用户", "二级用户", "三级用户", "四级用户", "顶级用户"],
        correct: [0, 1, 2]
    },
    {
        id: 115,
        question: "交互设计的生命周期开始于需求分析，还要进行以下活动（）。",
        options: ["设计", "编码", "实现", "测试", "维护"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 116,
        question: "以下选项属于使用低保真原型中涉及的方法（ ）。",
        options: ["情节串联图", "绘制草图", "使用索引卡", "使用模拟向导", "制作软件原型"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 117,
        question: "以下选项属于高保真原型的优点（）。",
        options: ["明确定义了过程流", "适用于探索和测试", "可作为详细规范", "开发成本低", "适用于搜集需求"],
        correct: [0, 1, 2]
    },
    {
        id: 118,
        question: "选择合适的声学基元是声学建模中最先遇到的问题。其选择需要满足三个条件，即基元的（）。",
        options: ["反馈性", "可训练性", "可推广性", "精确性", "冗余性"],
        correct: [1, 2, 3]
    },
    {
        id: 119,
        question: "语音识别技术中会遇到的困难有以下选项（）。",
        options: ["语音信号会受到上下文的影响而发生变化", "发音人口音的不同会导致语音特征在参数空间 分布的不同", "同一发音人心理变化带来的语音变化", "不同的发音方式和习惯引起的省略", "环境和信道等因素造成的语音信号失真问题"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 120,
        question: "小型语音识别系统的特点是（）。",
        options: ["体积小", "可靠性高", "耗电省", "价格低", "识别性能好"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 121,
        question: "随机模型法目前应用较为成熟，该方法主要采用 （）来对语音进行识别。",
        options: ["提取特征", "训练模板", "对模板进行分类", "对模板进行判断", "对模板进行放大"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 122,
        question: "以下选项可以帮助公司进行数据搜集（）。",
        options: ["现场观察", "合作设计原型", "进行访谈", "角色扮演", "专题讨论"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 123,
        question: "数据标注员工作描述正确的是（）。",
        options: ["数据标注员的工作主要包括对数据进行分类、 标签化和注释，以便让机器能够更好地理解和 使用这些数据", "标注员通常需要使用各种工具和软件来进行标 注工作，包括数据清理、分类、标签化、注释 和校验", "数据标注员只标注图像，不需要标注视频", "要对数据进行深入分析和理解，以便准确地为 数据添加必要的标签和注释。", "数据标注员需要对文本数据进行分类、情感分 析、关键词提取等操作"],
        correct: [0, 1, 3, 4]
    },
    {
        id: 124,
        question: "完整的实践教学体系应由以下部分（）组成。",
        options: ["实践教学内容体系", "实践教学的考核体系", "实践教学基地", "实践教学师资保障体系", "实训教材体系"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 125,
        question: "数据收集过程中，当日常下载数据出现异常数据，通信终端不能继续下载时，需要（）。",
        options: ["分析异常数据的原因", "及时解决侧风中的问题", "填写异常数据处理单", "及时解决通信问题", "分析异常数据的原因"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 126,
        question: "脏数据是指系统中的数据（）。",
        options: ["不在给定的范围内", "对于实际业务毫无意义", "数据格式非法", "在系统中存在不规范的编码", "在系统中存在含糊的业务逻辑"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 127,
        question: "数据处理主要包括（）。",
        options: ["数据清理", "数据转化", "数据抽取", "数据合并", "数据计算"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 128,
        question: "HPCC是美国实施信息高速公路而上实施的计划，该项目主要有以下部分组成()。",
        options: ["高性能计算机系统", "先进软件技术与算法", "国家科研与教育网格", "基本研究与人类资源", "信息基础结构技术和应用"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 129,
        question: "职业道德主要通过（）的关系，增强企业的凝聚力。",
        options: ["协调职工之间", "协调职工与企业", "调节企业与市场", "调节企业与企业"],
        correct: [1, 2]
    },
    {
        id: 130,
        question: "以下选项属于计算机感染了病毒后常有的表现（）。",
        options: ["数据完整", "文件分配表出错", "频繁死机", "文件不变", "计算机硬件损坏"],
        correct: [1, 2]
    },
    {
        id: 131,
        question: "以下选项属于计算机安全防护策略（）。",
        options: ["安装不明来路的软件", "下载不明文件", "随意点开链接", "安装杀毒软件", "定期更换密码"],
        correct: [3, 4]
    },
    {
        id: 132,
        question: "Linux系统中解压命令有（）。",
        options: ["pwd", "sudo", "tar", "unzip", "unrar"],
        correct: [2, 3, 4]
    },
    {
        id: 133,
        question: "临床医疗领域使用大数据体现在（）。",
        options: ["临床决策支持", "社保资金安全", "用户行为分析", "电子病历制作"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 134,
        question: "国家发展社会保险事业，建立社会保险制度，设立社会保险基金，使劳动者在情况下获得帮助和补偿。（）",
        options: ["年老", "工伤", "创业", "升职", "降职"],
        correct: [0, 1]
    },
    {
        id: 135,
        question: "下面不属于人工智能的应用技术的是（）。",
        options: ["心理学分析", "物理分析", "自然语言处理", "情感分析", "深度学习"],
        correct: [0, 1]
    },
    {
        id: 136,
        question: "电子产品销售企业通过以下人工智能技术进行数据分析，以便优化市场销售流程。（）",
        options: ["机器学习", "深度学习", "化学分析", "语言学分析", "推荐系统"],
        correct: [0, 1]
    },
    {
        id: 137,
        question: "任务调配系统的目的是（）。",
        options: ["最小化任务在队列中等待的时间长度", "最大化任务在队列中等待的时间长度", "最大化任务并行量以确保同时运行尽可能多的任务", "优化资源利用率达到降本增效", "最小化任务并行量以确保同时运行尽可能多的任务"],
        correct: [0, 2, 3]
    },
    {
        id: 138,
        question: "某市公交公司使用以下人工智能算法来制定地铁线路的运行班次表。（）",
        options: ["图像识别", "深度学习", "支持向量机", "自动驾驶", "声纹识别"],
        correct: [1, 2]
    },
    {
        id: 139,
        question: "国家税务局智能服务窗口使用人工智能计算机视觉的技术来核对人脸是否与其身份证件匹配。（）",
        options: ["计算机视觉", "人脸比对", "情感分析", "文本分类"],
        correct: [0, 1]
    },
    {
        id: 140,
        question: "视频通话办公软件通过自然语言处理技术的以下算法提高声音质量。（）",
        options: ["语音识别", "声纹识别", "文本分类", "计算机视觉", "增强现实"],
        correct: [0, 1]
    },
    {
        id: 141,
        question: "智能家居系统中，房屋主人可以命令扫地机器人打扫房屋。扫地机器人使用了人工智能技术。（）",
        options: ["声纹识别", "自然语言处理", "物理分析", "目标跟踪", "虚拟现实"],
        correct: [0, 1]
    },
    {
        id: 142,
        question: "以下属于计算机视觉领域中的算法是（）。",
        options: ["NLP", "FPGA", "R-CNN", "DT", "SSD"],
        correct: [2, 4]
    },
    {
        id: 143,
        question: "下面不属于人工智能在安防领域应用场景的是（）。",
        options: ["智能闸机系统", "警报系统", "声控开关", "物理分析"],
        correct: [2, 3, 4]
    },
    {
        id: 144,
        question: "人工智能在农业中应用时，其主要优势不包括（）。",
        options: ["提高生产效率", "精准农业管理", "减少人力成本", "降低农作物的生长周期", "实现人人耕种"],
        correct: [3, 4]
    },
    {
        id: 145,
        question: "下面不属于人工智能在养老方面的应用的是（）。",
        options: ["行为监测", "对话机器人", "智能家电", "物理分析", "虚拟现实"],
        correct: [3, 4]
    },
    {
        id: 146,
        question: "下面不属于数据分析的步骤的是（）。",
        options: ["数据采集", "数据清洗", "数据存储", "数据可视化", "数据标注"],
        correct: [2, 4]
    },
    {
        id: 147,
        question: "以下选项是监督学习需要注意的问题。（）",
        options: ["功能的复杂性和数量的训练数据", "偏置方差权衡", "输入空间的维数", "哪声中的输出值", "输出的特征数量"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 148,
        question: "判定表的建立步骤有（）。",
        options: ["填入动作项", "填入条件项", "确定规则的个数", "列出所有的条件桩和动作桩", "简化"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 149,
        question: "下面属于对算法模型进行评估的操作的是（）。",
        options: ["利用评价指标测评算法", "算法指标结果分析", "研究数据的规模", "研究算法的逻辑顺序", "研究模型的运算速率"],
        correct: [0, 1]
    },
    {
        id: 150,
        question: "下面属于自动驾驶系统测试工具DeepTest的优点的是（）。",
        options: ["最大限度地提高神经元覆盖率的测试用例", "最小限度地提高神经元覆盖率的测试用例", "具有强鲁棒性", "不鲁棒", "不能图像转换"],
        correct: [0, 2]
    },
    {
        id: 151,
        question: "下面属于TensorFlow的特点的是（ ）。",
        options: ["部署于各类服务器", "在PC端和网页应用", "不支持GPU高性能数值计算"],
        correct: [0, 1]
    },
    {
        id: 152,
        question: "TensorBoard的创建是为了帮助你了解模型中张量的流动，以便（）和（）模型。",
        options: ["构建", "训练", "调试", "优化"],
        correct: [3, 4]
    },
    {
        id: 153,
        question: "下面属于泛化误差评估方法的是（）。",
        options: ["留出法", "交叉验证法", "异常检测", "数据处理", "数据清洗"],
        correct: [0, 1]
    },
    {
        id: 154,
        question: "下面属于产品需求分析的要点的是（）。",
        options: ["建立用户认知", "确定用户核心主线的需求", "网络安全", "推荐系统"],
        correct: [0, 2]
    },
    {
        id: 155,
        question: "以下选项属于人工智能领域（）。",
        options: ["机器翻译", "智能控制", "机器人学", "图像理解", "语言理解"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 156,
        question: "以下选项是图像预处理所包含的内容和需求（）。",
        options: ["设置ROI", "几何变换", "阈值处理", "噪声去除", "颜色变换、图像分割"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 157,
        question: "人脸配准算法输入信息是（）。",
        options: ["人脸图片", "人脸坐标点", "人脸坐标框", "五官关键点", "人脸像素点"],
        correct: [0, 2]
    },
    {
        id: 158,
        question: "图像检测是检测关注特定的物体目标，从图像中同时获得（）信息和（）信息，把物体检测出来。",
        options: ["年龄", "类别", "位置", "表情", "形状"],
        correct: [1, 2]
    },
    {
        id: 159,
        question: "在医学领域，目标检测的核心问题有（）。",
        options: ["分类问题", "定位问题", "形状问题", "大小问题"],
        correct: [1, 2, 3, 4]
    },
    {
        id: 160,
        question: "以下选项属于需求管理的步骤（）。",
        options: ["定义需求", "需求确认", "建立状态", "需求评审", "需求承诺"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 161,
        question: "下面属于产品设计的方法的是（）。",
        options: ["组合设计", "语音识别", "计算机辅助设计", "图像识别", "物理分析"],
        correct: [0, 2]
    },
    {
        id: 162,
        question: "以下选项属于项目管理的实施把控内容（）。",
        options: ["对项目进行分析和需求策划", "对项目的组成部分或模块进行完整系统设计", "制定项目目标及项目计划、项目进度表", "制定项目执行和控制的基本计划", "建立项目管理的信息系统"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 163,
        question: "以下选项是项目管理的阶段（）。",
        options: ["起始阶段", "执行阶段", "结束阶段", "验收阶段", "实施阶段"],
        correct: [0, 1, 2]
    },
    {
        id: 164,
        question: "以下选项属于优化管理的主要内容（）。",
        options: ["企业内部人员理念", "组织结构", "产品需求", "资源利用", "工作机制"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 165,
        question: "风险识别的目的主要体现在以下方面（）。",
        options: ["已识别的项目风险是项目风险评估的最重要结果", "风险识别有助于确定风险管理的对象", "任何有助于风险信息发风险识别在整个风险管理过程中都占有重要位置，只有正确认识风险，才能正确分析风险", "通过风险识别，记录具体风险的各方面特征，并提供最适当的风险管理对策", "风险识别有助于提高风险分析的有效性"],
        correct: [1, 3, 4]
    },
    {
        id: 166,
        question: "下面不属于模型建立需要的数据的是（）。",
        options: ["完全集", "训练集", "测试集", "验证集", "并集"],
        correct: [0, 4]
    },
    {
        id: 167,
        question: "产品开发项目的管理是指对产品开发立项，进行计划、组织、实施和协调，并在实施过程中对项目运行状态进行（），最终完成产品开发项目的目标。",
        options: ["检测", "反馈", "控制", "调整", "计划"],
        correct: [0, 1, 2, 3]
    },
    {
        id: 168,
        question: "（）即数据挖掘过程中用于数据挖掘横型构建的数据。（）即用于检测模型构建，此款视只在模型检验时使用，用于评估模型的准确率",
        options: ["训练数据", "测试救援", "验证数据", "总体数据", "样本数据"],
        correct: [0, 1]
    },
    {
        id: 169,
        question: "下面关于风险控制的说法错误的是（）。",
        options: ["对于每种风险，预测标志其具体化的后期征兆", "对于每种风险，预测标志其具体化的早期征兆", "对于每种风险，预测标志其具体化的中期结果", "为每个项目创建并维护风险统计表", "跟踪根源性的风险"],
        correct: [0, 2]
    },
    {
        id: 170,
        question: "产品设计的基本原则是（）。",
        options: ["需求原则", "创造性原则", "语义性原则", "节约成本原则", "复杂原则"],
        correct: [0, 1, 2]
    },
    {
        id: 171,
        question: "下面不属于PyCharm基本配置的是（）。",
        options: ["外观定制", "语音识别", "代码调试", "代码风格设置", "慎感分析"],
        correct: [1, 4]
    },
    {
        id: 172,
        question: "人脸识别的几何特征矢量可以通过()等关键点得到。",
        options: ["虹膜中心", "内眼角点、外眼角点", "鼻尖点、鼻孔点", "耳屏点、耳下点", "口角点、头顶点"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 173,
        question: "以下选项属于深度学习常用的网络结构（）。",
        options: ["MLP网络", "RNN网络", "CNN网络", "AE网络", "RBM网络"],
        correct: [0, 1, 2, 3, 4]
    },
    {
        id: 174,
        question: "下面属于偏差-方差分解的组成部分的是（）。",
        options: ["偏差", "方差", "标准差", "误差", "均方差"],
        correct: [0, 1]
    },
    {
        id: 175,
        question: "下面属于OpenCV图片处理的功能的是（）。",
        options: ["提取图像中的文字", "识别文字", "网络安全", "裁剪图像", "在图像中绘制图案"],
        correct: [3, 4]
    },
    {
        id: 176,
        question: "TensorFlow的边有两种连接关系分别是（ ）。",
        options: ["数据依赖", "模型依赖", "时间依赖", "资源依赖", "控制依赖"],
        correct: [0, 4]
    },
    {
        id: 177,
        question: "下面属于静态测试的检查内容的是（）。",
        options: ["数据采集", "数据变换", "检查源程序的语法", "检查源程序的结构", "模型训练"],
        correct: [2, 3]
    },
    {
        id: 178,
        question: "在监督学习过程中，模型就是所要学习的（）。",
        options: ["输出", "输入", "条件概率分布", "决策函数", "参数"],
        correct: [2, 3]
    },
    {
        id: 179,
        question: "下面属于Python常用计算函数的是（）。",
        options: ["min", "max", "If", "print", "while"],
        correct: [0, 1]
    },
    {
        id: 180,
        question: "电子邮件中所包含的信息可以是（）。",
        options: ["文字信息", "图形图像信息", "声音信息", "只能文字信息", "以上都不可以"],
        correct: [0, 1, 2]
    },
    {
        id: 181,
        question: "以下选项中属于计算机硬件。（）",
        options: ["操作系统", "应用系统", "运算器", "中央处理路", "软件管理系统"],
        correct: [2, 3]
    },
    {
        id: 182,
        question: "人工智能应用广泛，在智能采购上会使用的技术（）。",
        options: ["深度学习", "人脸识别", "机器学习", "视频处理", "语言学分析"],
        correct: [0, 2]
    }
];

// 判断题题库
const trueFalseQuestions = [
    {
        id: 1,
        question: "任何职业道德的使用范围都是无限的。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 2,
        question: "评价职业道德行为只需考虑效果，不必考虑动机。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 3,
        question: "行业性是职业道德具有的特征之一。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 4,
        question: "企业环境需要由职工来维护和爱护。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 5,
        question: "职业道德的形式虽行业不同，但形式相同。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 6,
        question: "从业人员即使不喜欢某个工作，也要表现很喜欢的样子，这也是一种爱岗敬业。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 7,
        question: "爱岗敬业要树立终生学习理念。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 8,
        question: "古人云：“欲取之，必先与之”，说明助人能助己。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 9,
        question: "团结互助能够完成所有个人无法完成的任务，形成无坚不摧的巨大力量。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 10,
        question: "只要品德端正，学不学法无所谓。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 11,
        question: "新员工、转复岗人员、“四断”作业人员到岗位作业的，进行岗位安全操作规程的培训教育后方可上岗，其他岗位作业人员应定期进行安全操作规程的再教育， 以确保每个岗位作业人员熟悉并执行本岗位安全操作规程。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 12,
        question: "诚实守信就是在任何时候都要实事求是，任何情况下绝不能讲假话。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 13,
        question: "诚实守信是市场经济应有的法则。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 14,
        question: "从信仰层面看，工匠精神追究的终极目标是自我价值的实现。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 15,
        question: "在从业中，谨记尊重自己的选择，无论主动还是被动，这也是一种工匠精神，对自己和工作负责。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 16,
        question: "CPU和存储器合在一起称为主机。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 17,
        question: "操作系统是对计算机资源进行管理的软件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 18,
        question: "计算机病毒只会破坏软盘上的数据和文件。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 19,
        question: "采用“加密狗”等硬件，可以防止非法拷贝软件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 20,
        question: "在动环监控系统的数据摩服务器上安装了Windows2003系统，如果要使得BASS2100或者C3M系统的数据库支持4G以上的内存，那么应该安装32位企业版 本。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 21,
        question: "数据库中的数据一致性是指数据类型一致。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 22,
        question: "计算机工作环境温度应保持适中，一般温度设置为30摄氏度以上。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 23,
        question: "CGA、EGA和VGA标志着显示器的不同规格和性能。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 24,
        question: "计算机由于采用了存储程序原理，可以实现自动连续运算。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 25,
        question: "一个WPS表格的工作表可用行数和列数是不受限制的。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 26,
        question: "微信用户可以对好友新发的照片进行“评论”或“赞”，用户只能看相同好友的评论或赞。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 27,
        question: "计算机开机时可按F7进入安全模式。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 28,
        question: "通过共用他人的U盘，会存在感染病毒的风险。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 29,
        question: "IE浏览器常规设置主要在IE浏览器选项的“帮助”选项卡中进行设置和修改。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 30,
        question: "在搜索引擎中使用Title命令可以搜索网页标题。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 31,
        question: "在发送电子邮件时，可以在邮件中根据需要插入多个附件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 32,
        question: "电子邮件发送到收件人的电子信箱中，所采用的邮件传输协议是HTTP.（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 33,
        question: "网际快车只能上传，但是不能下载文件。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 34,
        question: "JPG是声音文件的格式后缀名。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 35,
        question: "用人单位支付劳动者的工资不得低于当地平均工资标准。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 36,
        question: "根据我国相关法律法规，劳动者不必缴纳工伤保险费。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 37,
        question: "国家支持研究开发有利于未成年人健康成长的网络产品和服务，依法惩治利用网格从事危害未成年人身心健康的活动，为未成年人提供安全健康的网络环境。 （）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 38,
        question: "发表权是指决定软件是否公之于众的权利。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 39,
        question: "联网经营许可证的，不得从事国际联网经营业务。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 40,
        question: "个人、法人和其他组织使用的计算机或计算机信息网络，需要进行国际联网的，必须通过接入网络进行国际联网。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 41,
        question: "DataPlpeline是ETL数据整合最常用工具。 （）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 42,
        question: "DataPipeline的底层框架在节点之间自动调节任务分配，但是不适用于大数据场景。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 43,
        question: "InformatIca是基于日志的采集方式，对于数据库有侵入性损坏。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 44,
        question: "Kettle对数据库表结构有要求，存在一定入侵行。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 45,
        question: "Kettle通过无图形化的界面进行预警。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 46,
        question: "生成行组件可选包括一定数量的静态字段。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 47,
        question: "分组组件通过定义分组字段来计算值。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 48,
        question: "任务调度是对整个ETL过程进行调度，提供分段提交处理和自动提交处理功能。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 49,
        question: "网络爬虫是指按照一定的策略自动抓取网页信息的程序或者脚本。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 50,
        question: "在Kettle中，数据抽取、清洗、转换和装载等操作都是通过Kettle工具提供的组件来实现的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 51,
        question: "抽取是连接到不同的数据源，以便为后续的步骤提供数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 52,
        question: "组件是转换的基础模块，例如，一个文本文件输入或一个表输出就是一个组件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 53,
        question: "节点连接是数据的通道，用于连接两个组件，使得数据能从一个组件传递到另一个组件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 54,
        question: "每个人对信息的看法和角度不同，从而导致信息在传递中出现滞后和误差。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 55,
        question: "在数据采集过程中，需要及时同客户进行沟通，协商解决问题的方法，做到不隐瞒、不降低数据采集标准与质量。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 56,
        question: "数据预处理目的是把原始数据转换为可以理解的格式或符合数据挖掘的格式。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 57,
        question: "基于源数据进行分析就可以实现训练精准的机器学习算法模型。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 58,
        question: "简单删除法是对缺失值进行处理的最有效手段。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 59,
        question: "语义类异常是指数据不能全面、无重复地表示客观世界的实体。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 60,
        question: "噪声数据中存在异常数据，并不会影响数据分析的结果。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 61,
        question: "聚类将类似的值组织成“群”或“簇”，落在群或簇之外的数值被称为离群点。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 62,
        question: "样本都是已知的，通常样本数目很大，故据质量或高或低，可能缺乏关于实际问题的后验知识。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 63,
        question: "一个完整的数据集在理论上是不存在取样误差的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 64,
        question: "特征值归约的好处在于简化了数据描述，并易于理解数据和最终的挖掘结果。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 65,
        question: "有参的特征值归约使用一个模型来评估函数，只需要存放参数，而不需要存放实际数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 66,
        question: "数据聚集是指对数据进行汇总或分类。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 67,
        question: "后剪枝决策树通常比预剪枝决策树保留了更少的分支。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 68,
        question: "数据采集是指从传感器和其他待测设备中自动采集模拟或数字信号电量或非电量信号送入控制器进行分析和处理。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 69,
        question: "各个业务数据源系统之间的完整性约束都是一致的，若要求统一数据间的完整性约束，可能需要重新定义数据的完整性约束。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 70,
        question: "大数据采集与分析多采用分布式大数据技术，且更加注重对流式数据的采集。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 71,
        question: "数据流处理模式对应的是静态数据形式。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 72,
        question: "数据采集不是从外部不同的数据源中抽取数据。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 73,
        question: "每次从源表中读取所有记录，然后逐条比较源表和目标表的记录，将新增和修改的记录过滤读取出来，采用MD5校验码。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 74,
        question: "神经网络通过使用更少的位数来存储相同数量的值，可以有效减轻内存压力。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 75,
        question: "半精度浮点数的取值范围远远大于单精度浮点数的取值范围。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 76,
        question: "在流程的设计和实施过程中，要对流程进行不断的改进，以期取得最佳的效果。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 77,
        question: "对程序的改进，除去可取消和合并之外，余下的还可进行必要的简化，这种简化是对工作内容和处理环节本身的简化。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 78,
        question: "日常生产活动管理中常常将管理流程和业务流程混为一谈。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 79,
        question: "业务流程若被人为分割，各自为政，这样不会造成浪费现象严重。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 80,
        question: "数据标注众包平台的数据主要来自提出数据标注需求的人工智能公司。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 81,
        question: "数据采集后，即可投入使用进行数据分析处理，无须进行数据清洗工作。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 82,
        question: "无论是数据采集、数据清洗还是数据标注，人工处理数据的方式并不能保证完全准确。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 83,
        question: "数据质检是非常关键的一个环节。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 84,
        question: "图像标注简单且快速。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 85,
        question: "文本标注人工识别过程复杂。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 86,
        question: "标签候选集将标注类别描述很清晰，便于数据标注员选择。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 87,
        question: "半结构化标注灵活性强，便于统计查找。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 88,
        question: "人工标注成本高、时间长且效率低。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 89,
        question: "人工标注给数据存储和使用带来不便。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 90,
        question: "项目负责人把控项目进度。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 91,
        question: "数据经由需求端、项目负责人和标注端三方共同确认验收通过，此数据标注项目可以结束。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 92,
        question: "人工智能模型最终要落地到具体应用场景。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 93,
        question: "人工智能算法的数据集分类比例一般为6:2:2.（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 94,
        question: "数据标注行业的特殊性决定了其对于人力的高度依赖性。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 95,
        question: "针对日志数据进行离线或在线实时采集与处理是目前互联网行业比较常见的业务。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 96,
        question: "数据标准化不会消除特征之间量纲和取值范围造成的影响。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 97,
        question: "离差标准化保留了原始数据值之间的联系，是消除量纲和数据取值范围影响最简单的方法，但受离群点影响较大，适用于分布较为均匀的数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 98,
        question: "数据处理为后续建模提供了重要的数据来源，极大影响数据建模结果的有效性和准确性。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 99,
        question: "通常缺失值的分布更具有规律性，使用插补的方法及逆行处理可以减少信息的损失。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 100,
        question: "拉格朗日插值公式结构紧凑。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 101,
        question: "机器学习算法的训练效果很大程度上依赖高质量数据集，如果训练所使用的标注数据集存在大量噪声，将会导致机器学习训练不充分。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 102,
        question: "数据标注是让机器学习从数据中更准确有效的获取规律。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 103,
        question: "机器学习训练图像识别是根据像素点进行的，所以对于图像标注的质量标准也是根据像素点位判定。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 104,
        question: "语音标注的质量标准是标注与发音时间轴误差在1个语音帧以内。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 105,
        question: "一个好的数据标注工具可以帮助团队节约成本，提高数据标注效率。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 106,
        question: "数据标注是指通过计算机等工具对各种类型的数据打标签，以深挖其应用价值。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 107,
        question: "在进行语音标注时，可以借助科大讯飞的语音标注工具，先进行简单的识别，再进行校对修改。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 108,
        question: "Labelme是文本标注工具。 （）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 109,
        question: "特征选择能够剔除不相关或者冗余的特征，从而达到减少特征数量、提高特征模型精确度和减少运行时间的目的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 110,
        question: "当原始数据集中的特征形式不适合直接进行建模时，使用一个或多个原特征构造新的特征会比直接使用原有特征更为有效。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 111,
        question: "数据标注员经过培训后，通过数据标注规则对海量数据进行标注。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 112,
        question: "根据数据标注者类型不同，可分为人工标注和机器标注。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 113,
        question: "为高效进行数据处理，必须要对数据缺失值进行处理。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 114,
        question: "一般来说补全缺失数据的方法比删除记录更加常用。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 115,
        question: "在数据清洗中，应当注意平滑噪声数据，最大限度纠正数据的不一致性和不完整性。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 116,
        question: "等宽分箱法是指在整个属性值的区间上平均分布，即每个箱的区间范围是一个常量，称为箱子宽度。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 117,
        question: "对海量复杂数据进行去重，可以减轻系统运行负担。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 118,
        question: "数据标注与人工智能相伴相生，在研究数据标注的同时，数据标注人员需要对人工智能有所了解。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 119,
        question: "标签用于标识数据的特征、类别和属性等。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 120,
        question: "声道指输入或输出信号的通道。通常用多声道来输入或输出不同的信号。如果只需录制一个位置的一种信号时，只要使用单声道就可以了。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 121,
        question: "噪声的振幅值越高越好，录音室里的录音一般可以控制在10以上。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 122,
        question: "停用词一般绝对文本特征没有任何贡献作用的字词，比如kB点符号、语气、人称等一些词。去停用词的操作一定要根据场顾进行，有些场景需要语气词来进行 判断情感。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 123,
        question: "图像标注包括图像标注和视频标注。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 124,
        question: "物体检测是从图像中选出要检测的对象，并通过标框标注的方式将物体标注出来。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 125,
        question: "由于文本标注中的任务较多，所以不同任务的质量标准各有不同。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 126,
        question: "文本数据标注需要遵循一定的质量标准。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 127,
        question: "当数据量较大时，采用WER算法进行语音数据标注质量评估比较好。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 128,
        question: "语音数据标注质量评估算法主要有词（错误）率算法和句子（错误）率算法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 129,
        question: "数据标注像素点越接近被标注物体的边缘像素点，图像标注的质量就越高，标注的难度相对较小。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 130,
        question: "数据以图像的形式存储在计算机中。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 131,
        question: "数据的可信性是获取用户信任的关键。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 132,
        question: "在人工智能领域，关联度是评价数据质量的首要指标。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 133,
        question: "测试计划是描述要进行的测试活动的范围、方法、资源和进度的文档，它确定了测试项、被测特性、测试任务、任务执行者以及各种可能风险等内容。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 134,
        question: "测试用例设计与执行、缺陷概况及问题概要是版本测试报告中的主要内容，测试人员需要在每个轮次测试结束时编写提交。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 135,
        question: "测试报告中测试结果的结论仅仅只是测试通过或者不通过。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 136,
        question: "软件测试是指使用人工或自动的手段，来运行或测试某个系统的过程。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 137,
        question: "回归算法模型的分类指标有平均绝对误差，均值误差，R方值和Recall.（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 138,
        question: "直接聚类法先把各个分类对象单独视为一类，然后根据距离最小的原则，依次选出一对分类对象，并成新类。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 139,
        question: "下采样是对训练集里面样本数量较少的类别（少数类）进行过采样，合成新的样本来缓解类不平衡。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 140,
        question: "在模型训练之前，需要将数据按照一定比例划分为训练集和验证集。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 141,
        question: "在样本的二分类中，当样本为反例，被分类为反例，称为假正类。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 142,
        question: "保留法可能出现训练集占55%，检验集占55%的情况。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 143,
        question: "留一法比喻P法的计算复杂度大幅度下降。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 144,
        question: "激活函数tanh在形状上看上去是Sigmoid函数经过平移。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 145,
        question: "现阶段算法设计工作已经可以完全自动化。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 146,
        question: "算法具有无穷性。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 147,
        question: "算法是可供计算机执行的对数据进行处理的一个有穷步骤，是解决问题的一个逻辑顺序，是解题方法的精确描述。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 148,
        question: "测试用例是测试时执行的最大实体。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 149,
        question: "需求分析结束后编写的用例为集成测试对应的用例。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 150,
        question: "模型评价中，评价结果仅仅评价的是模型准确度和一般性等因素。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 151,
        question: "算法的每一步骤必须有确切的定义。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 152,
        question: "计算时间复杂度的时候，主要考虑算法中最高阶项的开销，只要找出算法中最高阶的复杂度，就可以忽略低阶和常数的复杂度。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 153,
        question: "算法在运行过程中临时占用的存储空间不随算法的改变而改变。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 154,
        question: "聚类得到的簇可以用聚类中心，簇大小，簇密度和簇描述等来表示。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 155,
        question: "视觉编码的关键在于使用符合目标人群视觉感知习惯来表达。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 156,
        question: "利用WPS表格绘制图表时，完全不需要对数据结构有了解。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 157,
        question: "ggplot2是基于R语言的可视化库，与matplotllb相比，它可以将图层叠加起来绘图，但是与pandas整合度低。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 158,
        question: "欧式距离是计算欧氏空间中三点之间或以上的距离。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 159,
        question: "免费且直接可用的数据方便寻找，数据量庞大。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 160,
        question: "著名的ImageNet图片集就是以众包的方式进行人工标记的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 161,
        question: "模型训练中周期是指数据集中一个样本的一次完整训练。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 162,
        question: "泛化误差代表此方法的泛化能力，即对于新的样本数据的分类能力如何。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 163,
        question: "对于过拟合问题，可以通过增加分类属性的数量，选择合适的分类属性等方法，提高模型对于训练样本的拟合程度。（）",
        options: ["正确", "错误"],
        correct: []
    },
    {
        id: 164,
        question: "AUC是一种用来度量分类模型好坏的一个标准，AUC作为数值可以直观的评价分类器的好坏，值越小越好。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 165,
        question: "学习率越高，模型的训练速度越快。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 166,
        question: "多项式调整策略是指定最少迭代次数，每一轮迭代会减少学习率。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 167,
        question: "传统机器学习方法中有很多防止过拟合的方法，其中大部分也适用于神经网络。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 168,
        question: "集成化方法是通过合并多个模型的结果来提高泛化误差的方法，所以也称其为模型平均。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 169,
        question: "管理者识别需求要利用信息支持评审过程输入、过程输出、资源配置的合理性、过程活动的优化方案和过程异常变异的发现。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 170,
        question: "数据分析模型优化目标函数是使全局损失函数最大。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 171,
        question: "K折交叉验证需要将数据集分成k个互不相交的大小不同的数据集。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 172,
        question: "交叉验证的优点是大大减少了计算量。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 173,
        question: "如果两个变量的变化趋势相反，即其中一个大于自身的期望值，另外一个却小于自身的期望值，那么两个变量之间的协方差就是正直。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 174,
        question: "标准差能反映一个数据集的聚集程度。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 175,
        question: "标准误差和观测次数n有关，在实际测量中，观测次数n是无限的，真值只能用最可信赖（最佳）值来代替。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 176,
        question: "线性回归包括简单线性回归和多元线性回归。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 177,
        question: "残差平方和表示自变量的预测值与回归值的差的平方和，它反应了回归方程以外因素的影响，即回归直线无法解释的因素。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 178,
        question: "对逻辑回归算法的效果评估一般采用曲线上面积指标来评价。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 179,
        question: "纵向对比是不同事物在固定时间上的对比。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 180,
        question: "分组分析法中，在特定的分组标志下，总体中的任何一个单位可以归属于某一个组，或者同时或可能归属于几个组。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 181,
        question: "漏斗分析法可以针对某些步骤解决问题，提高整体的转化率。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 182,
        question: "AB测试分析法是一种对比分析法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 183,
        question: "在为某个app界面或流程制作两个版本时，分别让组成成分相同（相似）的访客群组（目标人群）在不同时间自度随机的访问这些版本，收集各群组的用户体 验数据和业务数据，最后分析、评估出最好版本，正式采用，这种方法称为AB测试。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 184,
        question: "通过Shapiro正态性检验推断样本的两个属性是否不相关。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 185,
        question: "卡方检验用于验证两个数值型变量之间的独立性。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 186,
        question: "用t检验对学生性别与其是否被录取进行相关性分析。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 187,
        question: "泊松分布适合描述单位时间内随机发生的次数的概率分布。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 188,
        question: "标准正态分布的数学期望为1，方差为1.（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 189,
        question: "贝叶斯定理是关于随机事件A和B的条件概率（或边缘概率）的一则定理。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 190,
        question: "均值能够描述数据的离散程度。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 191,
        question: "统计调和平均数总是大于数学调和平均数。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 192,
        question: "极值是在概率论和统计方差衡量随机变量或一组数据时离散程度的度量。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 193,
        question: "特征选择指从原始数据中构建新的特征，在实际应用中需要手工构建。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 194,
        question: "特征构建是指从模型数据中人工的找出一些具有物理意义的特征。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 195,
        question: "通过探索性分析不可以挖掘数据背后隐藏的内在规律和联系。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 196,
        question: "通常在对比两组样本之间的差异时，可以选择统计学中的直方图。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 197,
        question: "假设检验中第一类错误为纳伪的错误。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 198,
        question: "Lasso的基本思想是在回归系数的绝对值之和小于一个常数的约束条件下，便残差平方和 (RSS)最大化。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 199,
        question: "条形图可以看出不同类别的占比。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 200,
        question: "条形图是垂直方向显示的。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 201,
        question: "柱形图可以用来比较不同类别之间的数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 202,
        question: "用户无法将条形图修改为柱形图。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 203,
        question: "面积图的堆积图区域应该透明。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 204,
        question: "饼图可以显示不同组成成分相对于整体的比例。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 205,
        question: "饼图绘制时的数据可以有负值。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 206,
        question: "可视化图表可以帮助用户找出数字背后隐藏的信息，总结趋势和规律。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 207,
        question: "文字云不属于数据可视化图表。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 208,
        question: "利用频数分析和交叉频数分析可以检验异常值。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 209,
        question: "人机界面是系统和用户之间进行交互和信息交换的媒介。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 210,
        question: "人机交互与人机界面是两个完全相同的概念。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 211,
        question: "图形用户界面是指采用图形方式显示的计算机操作用户界面。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 212,
        question: "图形用户界面设计的目的是实现人机交互。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 213,
        question: "具有高度一致的用户界面有利于降低培训和支持成本。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 214,
        question: "交互设计的功能可视性越好，越方便用户发现和了解使用方法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 215,
        question: "交互设计分析阶段的输入物为设计初稿。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 216,
        question: "可用性目标可以让人得到偶感上的满足。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 217,
        question: "富有美感和可激发创造性得系统可以满足更高的用户需求。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 218,
        question: "在系统设计原则可以不包含反馈原则。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 219,
        question: "概念模型包括基于活动的概念模型和基于对象的概念模型。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 220,
        question: "交互设计中，应使用以设计者为中心的开发方法。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 221,
        question: "交互设计过程中，迭代是可以避免的。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 222,
        question: "实际制作原型时，多数项目应使用高保真原型，因为低保真原型存在一些固有问题。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 223,
        question: "三管子模型综合了前两个发育的影响。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 224,
        question: "用语音可以控制电视机、空调、电扇、窗帘的系统是一个语音识别系统。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 225,
        question: "声学模型一直是个人教学助理应用和技术的瓶颈之一。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 226,
        question: "有的语音识别专用芯片也能够实现非特定人语音识别。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 227,
        question: "梅尔倒着系数和感知线性预测系数在一定程度上参考了人耳感知音频信号的机理，在时域进行解卷积而得到的声学特征。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 228,
        question: "最主流的语音识别方法是随机模型法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 229,
        question: "隐马尔科夫模型理论算法的优点是简便优质，在语音识别性能方面优异。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 230,
        question: "解弱留的搜索策略一般为广度优先搜索。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 231,
        question: "我们可以通过问卷调查、访谈、专门小组和专题讨论、自然观察等方式进行数据收集。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 232,
        question: "问卷调查具有定量及定性数据，而自然观察都是定量数据。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 233,
        question: "问卷调查的优点是使用资源少，调查人数多。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 234,
        question: "数据搜集需要组合使用不同的数据搜集技术，保证我们获得更多信息，并证实发现。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 235,
        question: "数据搜集活动，在可能时，应先进行大规模试验。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 236,
        question: "中级数据标注员经过一定阶段培训考取资格证，不仅可以做一些更加专业的数据标注，但不可以对初级质检员标注数据进行简单的质检。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 237,
        question: "利用幻灯、电影、录像、录音、电脑等视听教材进行培训，多用于新进员工培训中。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 238,
        question: "具有1个月标注经验的标注员可以成为主讲师的助教。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 239,
        question: "对于有三个月以上标注经验的数据标注员，在质量提升计划中，需要用半天时间进行基础规范教学培训。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 240,
        question: "实践教学是培养具有创新意识的高素质工程技术人员的重要环节。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 241,
        question: "实践教学要确立以素质教育为核心，技术应用能力培养为主线，应变能力培养为关键，产学研结合为途径，与时俱进的人才教育培养模式。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 242,
        question: "数据可追溯性是数据处理过程中最好的依据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 243,
        question: "数据挖掘是一种高级的数据分析方法，主要关注分类、聚类、关联和预测四大问题。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 244,
        question: "一般情况下，数据是通过表格和图形的方式来呈现的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 245,
        question: "最基础的数据标注团队一般有数据标注员、质检员两个岗位角色。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 246,
        question: "数据采集组由于主要负责采集工作，设立数据采集组负责人，并根据项目小组划分，设立项目小组长。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 247,
        question: "只有在实践过程中，才能体现出职业道德的水准。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 248,
        question: "不同的行业和不同的职业，有相同的职业道德标准。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 249,
        question: "爱岗敬业就是无条件的无私奉献。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 250,
        question: "同事之间的竞争会使同事之间关系紧张，影响公司团结。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 251,
        question: "化工生产安全教育的对象只对技术人员和一线操作员工。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 252,
        question: "专业精神包括工匠自身的技能、技艺和技术，是工匠精神的基本载体。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 253,
        question: "培养工匠精神就是要放下功利心，拾起公德心，在工作中反思反省，强调把工作当作乐趣。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 254,
        question: "多道程序设计是指在分布式系统中同一时刻运行多个程序。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 255,
        question: "要注意计算机病毒可以传染给计算机使用人员。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 256,
        question: "为数据表创建索引的目的是创建唯一索引。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 257,
        question: "计算机的性能主要包括软件性能和硬件性能，但软件对计算机的性能起着决定性的作用。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 258,
        question: "一般情况下，显卡的显存越大越好。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 259,
        question: "反病毒软件可以查、杀任何种类的病毒。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 260,
        question: "感染过计算机病毒的计算机具有对该病毒的免疫性。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 261,
        question: "现在我们大多数情况下都是使用基于万维网的电子邮件。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 262,
        question: "在常用的传输介质中，带宽最宽、传输衰减最小、抗干扰能力最强的是光纤。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 263,
        question: "多媒体图像的最大优点是容易进行移动、缩放、旋转和扭曲等变换。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 264,
        question: "合成数字图像可以采用四则运算。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 265,
        question: "职工代表大会至少每年召开一次。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 266,
        question: "开发环境及测试环境应与实际运行环境及办公环境安全隔离，同时测试环境禁止使用生成数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 267,
        question: "设计研发单位应严格按照公司软件著作权管理要求及时进行资料移交，并确保提交材料的真实性、完整性和可用性。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 268,
        question: "软件著作权人可以许可他人行使其软件著作权，并有权获得报酬。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 269,
        question: "接入网络可以是多级联接的网络。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 270,
        question: "性能的定义随算法不同而改变。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 271,
        question: "考试等级属于定序等级数据。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 272,
        question: "在HTML表单中，隐含字段可以让字段的值对浏览器可见，但是对用户不可见。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 273,
        question: "噪声是被测变量的随机误差或方差。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 274,
        question: "许多数据光滑的方法也用于数据离散化。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 275,
        question: "属性分割和结合是特征构建时常使用的方法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 276,
        question: "特征构建是指从原始数据中自动生成一些具有物理意义的特征，不需要花时间去观察原始数据。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 277,
        question: "卡方检验分为拟合度的卡方检验和卡方独立性检验。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 278,
        question: "属性不可能在不同的抽象层。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 279,
        question: "数据归约策略包括维归约、数量归约和数据压缩。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 280,
        question: "数据归约可以得到数据集的简化表示，它比原数据集小得多。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 281,
        question: "半结构化数据扩展性受限。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 282,
        question: "就文本信息而言，采集到的数据可以是网页、SQL文件、PDF文档等。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 283,
        question: "数据预处理过程会占用很多时间，虽然麻烦但也是必不可少且非常重要的一步。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 284,
        question: "聚合也可以在查询、分析进行之前完成，这个过程称为预聚合。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 285,
        question: "抽样是为了从样本中得出关于群体的结论。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 286,
        question: "return返回后，函数会释放，而生成器则不会。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 287,
        question: "分词就是将连续的字序列按照一定的规范重新组合成词序列的过程。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 288,
        question: "结巴分词不支持并行分词。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 289,
        question: "TF-IDF适用于任何文档的词频统计工作。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 290,
        question: "当我们在WPS单元格输入数值后，可以通过自定义格式创建自己需要的数据格式。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 291,
        question: "多次排序时，一定要打开排序窗口检查规则。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 292,
        question: "WPS表格中，IFERROR函数可以用于自定义报错结果的检查。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 293,
        question: "SPSS是目前最流行的统计软件平台之一，广泛地运用于学习算法、统计分析、以及与大数据集成等场景中。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 294,
        question: "肯德尔相关系数与斯皮尔曼相关系数对故据条件的要求相同。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 295,
        question: "多元线性回归模型通常用来描述变量Y和X之间的随机线性关系。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 296,
        question: "正态检验主要用于检验一个数据集是否服从正态分布。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 297,
        question: "两独立样本均值检验的要求是两样本独立，服从正态分布或近似正态。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 298,
        question: "超几何分布描述的是两次随机事件发生的时间间隔的概率分布情况。（）",
        options: ["正确", "错误"],
        correct: []
    },
    {
        id: 299,
        question: "分类是一种半监督学习方法。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 300,
        question: "业务专家对聚类结果进行评判时要结合具体应用的业务场景进行评判。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 301,
        question: "分类可以从事物的本质属性和显著特征两大方面来进行分类。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 302,
        question: "由于CSV文件格式处置的是平面数据，因此需要事先对复杂的数据结构进行格式上的转换。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 303,
        question: "语音标注质检主要是关注语音数据发音的时间轴与标注区域的音标是否相符。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 304,
        question: "语音识别评估标准WER是不可能大于100%的。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 305,
        question: "对于出行行业而言，数据标注除了用于汽车自动驾驶外，还可以结合物联网数据进一步帮助规划驾驶路线。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 306,
        question: "标签是用来标识数据的特征，可用于建立数据及机器学习训练要求所定义的机器可读数据编码间的联系。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 307,
        question: "实时检测时，数据标注任务划分小组完成后，不需要将数据集进行分段标注。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 308,
        question: "数据敏感度是业务理解力、客户理解力、数据理解力三者的综合结果。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 309,
        question: "标注图片以判断真人为准，如果图片中非真人，则需要剔除该类图片。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 310,
        question: "属性过多，标注不明确是行人属性标注的难点之一。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 311,
        question: "点位属性判断在骨骼关键点、手部关键点、托盘关键点等工具都有着广泛的应用。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 312,
        question: "在实际工作场景中，标注工程师在用人脸8点工具标注人脸时，眼镜折射会对标注点产生影响。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 313,
        question: "一人所属照片清洗工具通常情况下是一种二分类标注工具。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 314,
        question: "运用3D人脸朝向工具进行人脸识别不存在安全隐患。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 315,
        question: "行人属性筛选工具的目的是将不符合标准的图片剔除。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 316,
        question: "使用属性标注工具进行标注时，不需要对图片内人物是否清晰进行评估。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 317,
        question: "标注骨骼关键点可以不要以真实人物左右方向进行标注。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 318,
        question: "在标注手部关键点时，可根据自身的手部骨骼点推测进行标注。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 319,
        question: "现阶段人脸朝向识别技术仍需要以清晰人脸为基础，人脸模糊、变形都会降低识别准确度。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 320,
        question: "时间型数据不是聚合算法支持的数据类型。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 321,
        question: "聚合数据有两个层面，一是对数据的聚合运算，二是多维度的聚合。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 322,
        question: "目前实时数据关联存在关联数据严重倾斜的问题。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 323,
        question: "异常大致分为异常值、波动点和异常时间序列三类。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 324,
        question: "基于统计模型的异常点检测技术将所有数据构建成一个数据模型，其认为异常点是那些与模型不能完美拟合的对象。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 325,
        question: "故障定位技术包括监控告警型和日志分析型。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 326,
        question: "ETL仅仅是对一个企业部门的数据整合。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 327,
        question: "系统管理除包括管理具体系统状态相关的内容外，还包括配置管理、变更管理、文档管理等。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 328,
        question: "配置管理的具体目标包括提供准确的信息和文档以支持其他服务管理流程。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 329,
        question: "IT组件对于IT服务的提供是至关重要的。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 330,
        question: "变更管理流程的范围由配置管理和发布管理决定。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 331,
        question: "运维管理除了管理常规的运维报告文档和技术文档外，还管理运维管理文档和系统调测文档。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 332,
        question: "对比分析法有绝对数比较和相对数比较两种形式。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 333,
        question: "分组分析法是指根据事物内在的特点，按照所定的标志，划分成性质不同的各个部分，从而发现未被利用的后备力量的一种分析方法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 334,
        question: "WPS表格中的INT函数的用途是截取字符串。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 335,
        question: "数据透视表的优势在于快速、高效和灵活。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 336,
        question: "Tableau只需用拖放的方式就可快速地创建出交互、美观、智能的视图和仪表盘，快速创建出各种图表类型。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 337,
        question: "智能化流程管理强调从业务流程运行数据发现业务问题，寻找流程控制及运行的规律，从而发现优化业务流程管理的方法。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 338,
        question: "信息加工泛指将收集到的原始信息按照一定的程序和方法进行分类、分析、整理、存储、融合等的处理过程。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 339,
        question: "人机交互是指人与计算机可以通过计算机语言、自然语言及图形等方式进行对话。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 340,
        question: "当设定区间足够大，且步长足够大时，网络搜索法就一定可以找到全局最优解。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 341,
        question: "按控制原理的不同，自主无人系统分为开环控制系统和闭环控制系统。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 342,
        question: "智能计算是一种具有学习能力和能够处理新情况的计算方法，这样的系统被认为拥有多个推理属性。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 343,
        question: "数据分析报告的规范性原则是指报告中所使用的名词术语一定要规范，标准统一，前后一致。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 344,
        question: "使用消息中间件可以提高上游生产者写入的并发性能。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 345,
        question: "“多边形+属性”标注工具不可以应用在城市小广售管理等目标形状不明确的场景。（）",
        options: ["正确", "错误"],
        correct: [1]
    },
    {
        id: 346,
        question: "目标人物合并结束后，系统将数据标注工程师选取的所有帧进行整合，自动检测所选取到的目标人物图像。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 347,
        question: "按检验特性值的属性可以将抽样检验分为计数型抽样检验和计量型抽样检验两大类。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 348,
        question: "分类标注是最基本的一种标注手段，其表现形式一般就是一张图对应一个数字标签。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 349,
        question: "聚类分析被用来发现不同的客户群，并且通过购买模式刻画不同的客户群的特征。（）",
        options: ["正确", "错误"],
        correct: [0]
    },
    {
        id: 350,
        question: "WPS表格中，VLOOKUP的放只能直找垂直列表中的数据，无法直找水平列表的数据。（）",
        options: ["正确", "错误"],
        correct: [1]
    }
];

// 题库管理类
class QuestionBank {
    constructor() {
        this.singleChoice = singleChoiceQuestions;
        this.multipleChoice = multipleChoiceQuestions;
        this.trueFalse = trueFalseQuestions;
    }

    // 根据类型获取题目
    getQuestionsByType(type) {
        switch(type) {
            case '单选题':
                return this.singleChoice;
            case '多选题':
                return this.multipleChoice;
            case '判断题':
                return this.trueFalse;
            default:
                return [];
        }
    }



    // 随机获取指定数量的题目
    getRandomQuestions(type, count) {
        const questions = this.getQuestionsByType(type);
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // 按顺序获取指定数量的题目（按id排序）
    getSequentialQuestions(type, count) {
        const questions = this.getQuestionsByType(type);
        // 按id顺序排序
        const sorted = [...questions].sort((a, b) => a.id - b.id);
        return sorted.slice(0, count);
    }

    // 根据练习模式获取题目
    getQuestionsByMode(type, count, isSequential = true) {
        if (isSequential) {
            return this.getSequentialQuestions(type, count);
        } else {
            return this.getRandomQuestions(type, count);
        }
    }



    // 获取题目总数
    getTotalCount(type) {
        return this.getQuestionsByType(type).length;
    }

    // 根据ID获取题目
    getQuestionById(type, id) {
        const questions = this.getQuestionsByType(type);
        return questions.find(q => q.id === id);
    }

    // 搜索题目
    searchQuestions(type, keyword) {
        const questions = this.getQuestionsByType(type);
        return questions.filter(q => 
            q.question.includes(keyword) || 
            q.explanation.includes(keyword)
        );
    }
}

// 导出题库实例
const questionBank = new QuestionBank();

// 如果在浏览器环境中，将题库添加到全局对象
if (typeof window !== 'undefined') {
    window.questionBank = questionBank;
    window.singleChoiceQuestions = singleChoiceQuestions;
    window.multipleChoiceQuestions = multipleChoiceQuestions;
    window.trueFalseQuestions = trueFalseQuestions;
}

// 如果在Node.js环境中，导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questionBank,
        singleChoiceQuestions,
        multipleChoiceQuestions,
        trueFalseQuestions
    };
}