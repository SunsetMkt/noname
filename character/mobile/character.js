const characters = {
	mb_simafu: ["male", "wei", 3, ["mbpanxiang", "mbchenjie"], ["name:司马|孚"]],
	mb_sp_guanqiujian: ["male", "wei", 4, ["mbcuizhen", "mbkuili"], ["name:毌丘|俭"]],
	mb_caomao: ["male", "wei", 3, ["mbqianlong", "mbweitong"], ["zhu"]],
	chengji: ["male", "wei", 4, ["mbkuangli", "mbxiongsi"]],
	lizhaojiaobo: ["male", "wei", 4, ["mbzuoyou", "mbshishou"], ["name:李|昭-焦|伯"]],
	yangfeng: ["male", "qun", 4, ["mbxuetu", "mbweiming"]],
	xin_huojun: ["male", "shu", 4, ["sidai", "jieyu"], ["character:tw_huojun", "die:tw_huojun"]],
	muludawang: ["male", "qun", "3/3/1", ["shoufa", "zhoulin", "yuxiang"], ["name:null|null"]],
	mb_chengui: ["male", "qun", 3, ["guimou", "zhouxian"]],
	mb_huban: ["male", "wei", 4, ["mbyilie"]],
	mb_xianglang: ["male", "shu", 3, ["naxue", "yijie"]],
	yanxiang: ["male", "qun", 3, ["kujian", "twruilian"], ["die:tw_yanxiang"]],
	mb_sunluyu: ["female", "wu", 3, ["mbmeibu", "mbmumu"]],
	xin_wuban: ["male", "shu", 4, ["xinjintao"], ["clan:陈留吴氏", "character:wuban"]],
	baoxin: ["male", "qun", 4, ["mutao", "yimou"], ["die:tw_baoxin"]],
	jiangji: ["male", "wei", 3, ["twjichou", "jilun"], ["character:tw_jiangji", "die:tw_jiangji"]],
	liwei: ["male", "shu", 4, ["jiaohua"], ["die:tw_liwei"]],
	laimin: ["male", "shu", 3, ["laishou", "luanqun"]],
	yj_zhoubuyi: ["male", "wei", 3, ["mbhuiyao", "mbquesong"]],
	xin_guozhao: ["female", "wei", 3, ["yichong", "wufei"]],
	xin_zhangyi: ["male", "shu", 4, ["xinwurong", "shizhi"]],
	xin_sunliang: ["male", "wu", 3, ["xinzhizheng", "xinkuizhu", "xinlijun"], ["zhu"]],
	re_xiaoqiao: ["female", "wu", 3, ["retianxiang", "xinhongyan"], ["name:桥|null"]],
	shichangshi: ["male", "qun", 1, ["mbdanggu", "mbmowang"], ["sex:male_castrated", "name:张|让-赵|忠-孙|璋-毕|岚-夏|恽-韩|悝-栗|嵩-段|珪-郭|胜-高|望"]],
	re_zhangzhang: ["male", "wu", 3, ["rezhijian", "guzheng"], ["name:张|昭-张|纮"]],
	qianzhao: ["male", "wei", 4, ["mbshihe", "mbzhenfu"]],
	re_yanwen: ["male", "qun", 4, ["reshuangxiong"], ["name:颜|良-文|丑"]],
	xin_zhoutai: ["male", "wu", 4, ["buqu", "new_fenji"]],
	re_caozhi: ["male", "wei", 3, ["reluoying", "rejiushi", "chengzhang"]],
	yj_weiyan: ["male", "qun", "4/4/1", ["mbguli", "mbaosi"]],
	re_chenqun: ["male", "wei", 3, ["redingpin", "refaen"]],
	xin_caoxiu: ["male", "wei", 4, ["qianju", "xinqingxi"]],
	xin_zhuhuan: ["male", "wu", 4, ["fenli", "xinpingkou"]],
	sp_pengyang: ["male", "shu", 3, ["spdaming", "spxiaoni"]],
	wangjun: ["male", "qun", 4, ["zhujian", "duansuo"]],
	xin_zhuzhi: ["male", "wu", 4, ["sbanguo"]],
	xin_wuyi: ["male", "shu", 4, ["sbbenxi"]],
	yangfu: ["male", "wei", 4, ["jiebing", "hannan"]],
	sp_caosong: ["male", "wei", 3, ["yijin", "guanzong"]],
	re_liru: ["male", "qun", 3, ["rejuece", "remieji", "xinfencheng"]],
	re_dianwei: ["male", "wei", 4, ["reqiangxi"]],
	xin_mamidi: ["male", "qun", 3, ["chengye", "buxu"]],
	ruanhui: ["female", "wei", 3, ["mingcha", "jingzhong"]],
	xin_quancong: ["male", "wu", 4, ["sbyaoming"]],
	re_xunyu: ["male", "wei", 3, ["quhu", "rejieming"], ["clan:颍川荀氏"]],
	xin_jushou: ["male", "qun", "2/3/3", ["xinjianying", "shibei"]],
	re_bulianshi: ["female", "wu", 3, ["reanxu", "zhuiyi"]],
	re_caiwenji: ["female", "qun", 3, ["rebeige", "duanchang"]],
	sp_jianggan: ["male", "wei", 3, ["mbdaoshu", "spdaizui"]],
	peixiu: ["male", "qun", 3, ["xingtu", "juezhi"]],
	re_gaoshun: ["male", "qun", 4, ["rexianzhen", "rejinjiu"]],
	re_wuguotai: ["female", "wu", 3, ["reganlu", "buyi"], ["name:丁|null"]],
	xin_sunxiu: ["male", "wu", 3, ["mobileyanzhu", "mobilexingxue", "zhaofu"], ["zhu"]],
	sp_maojie: ["male", "wei", 3, ["bingqing", "yingfeng"]],
	yj_huangzhong: ["male", "qun", 4, ["spshidi", "spyishi", "spqishe"]],
	re_yufan: ["male", "wu", 3, ["zhiyan", "rezongxuan"]],
	sunhanhua: ["female", "wu", 3, ["chongxu", "miaojian", "shhlianhua"]],
	yanpu: ["male", "qun", 3, ["huantu", "bihuo"]],
	mayuanyi: ["male", "qun", 4, ["jibing", "wangjing", "moucuan"]],
	fuqian: ["male", "shu", 4, ["jueyong", "poxiang"]],
	xin_caozhen: ["male", "wei", 4, ["discretesidi"]],
	xin_sunluban: ["female", "wu", 3, ["xinzenhui", "xinjiaojin"]],
	qiaozhou: ["male", "shu", 3, ["zhiming", "xingbu"]],
	xin_guyong: ["male", "wu", 3, ["xinshenxing", "xinbingyi"]],
	re_zhonghui: ["male", "wei", 4, ["requanji", "zili"], ["clan:颍川钟氏"]],
	xin_caifuren: ["female", "qun", 3, ["xinqieting", "xianzhou"], ["name:蔡|null"]],
	xin_zhoucang: ["male", "shu", 4, ["mobilezhongyong"]],
	ol_yujin: ["male", "wei", 4, ["rejieyue"], ["die:yujin_yujin.mp3"]],
	zhouqun: ["male", "shu", 3, ["tiansuan"]],
	re_zhurong: ["female", "shu", 4, ["juxiang", "relieren"]],
	re_jiangwei: ["male", "shu", 4, ["retiaoxin", "zhiji"]],
	nanhualaoxian: ["male", "qun", 3, ["yufeng", "tianshu"], ["name:庄|周"]],
	re_handang: ["male", "wu", 4, ["regongji", "jiefan"]],
	re_dengai: ["male", "wei", 4, ["retuntian", "zaoxian"]],
	xin_fuhuanghou: ["female", "qun", 3, ["xinzhuikong", "xinqiuyuan"]],
	xin_panzhangmazhong: ["male", "wu", 4, ["xinduodao", "xinanjian"], ["name:潘|璋-马|忠"]],
	xin_guohuai: ["male", "wei", 4, ["mobilejingce"]],
	gongsunkang: ["male", "qun", 4, ["juliao", "taomie"], ["name:公孙|康"]],
	xin_zhangfei: ["male", "shu", 4, ["new_repaoxiao", "liyong"]],
	xin_hansui: ["male", "qun", "4/4/1", ["xinniluan", "xiaoxi_hansui"]],
	hucheer: ["male", "qun", 4, ["daoji"]],
	re_lingtong: ["male", "wu", 4, ["rexuanfeng"]],
	re_liubiao: ["male", "qun", 3, ["zishou", "rezongshi"]],
	simashi: ["male", "wei", 4, ["baiyi", "jinglve", "shanli"], ["name:司马|师"]],
	yanghuiyu: ["female", "wei", 3, ["hongyi", "requanfeng"]],
	xin_zhuran: ["male", "wu", 4, ["mobiledanshou"]],
	xin_gongsunzan: ["male", "qun", 4, ["xinyicong", "qiaomeng"], ["name:公孙|瓒"]],
	dingyuan: ["male", "qun", 4, ["beizhu"]],
	xin_jianyong: ["male", "shu", 3, ["xinqiaoshui", "xinjyzongshi"]],
	xin_caozhang: ["male", "wei", 4, ["rejiangchi"]],
	xin_liaohua: ["male", "shu", 4, ["redangxian", "refuli"]],
	furong: ["male", "shu", 4, ["xuewei", "liechi"]],
	re_dongzhuo: ["male", "qun", 8, ["rejiuchi", "roulin", "benghuai", "baonue"], ["zhu"]],
	re_xusheng: ["male", "wu", 4, ["repojun"]],
	sp_sufei: ["male", "qun", 4, ["zhengjian", "gaoyuan"]],
	yj_zhangliao: ["male", "qun", 4, ["weifeng"]],
	yj_zhanghe: ["male", "qun", 4, ["xinzhilve"]],
	yj_xuhuang: ["male", "qun", 4, ["xinxhzhiyan"]],
	yj_ganning: ["male", "qun", 4, ["gnjinfan", "gnsheque"]],
	re_sunjian: ["male", "wu", 4, ["gzyinghun", "repolu"]],
	zhengxuan: ["male", "qun", 3, ["zhengjing"]],
	dengzhi: ["male", "shu", 3, ["jimeng", "shuaiyan"]],
	xin_chengpu: ["male", "wu", 4, ["relihuo", "chunlao"]],
	yangyi: ["male", "shu", 3, ["duoduan", "gongsun"]],
	dongcheng: ["male", "qun", 4, ["chengzhao"]],
	re_pangtong: ["male", "shu", 3, ["xinlianhuan", "niepan"]],
	re_guanqiujian: ["male", "wei", 4, ["rezhengrong", "rehongju"], ["name:毌丘|俭"]],
	chendeng: ["male", "qun", 3, ["zhouxuan", "fengji"]],
	re_heqi: ["male", "wu", 4, ["reqizhou", "reshanxi"]],
	yangbiao: ["male", "qun", 3, ["zhaohan", "rangjie", "yizheng"]],
	re_sp_zhugeliang: ["male", "shu", 3, ["bazhen", "rehuoji", "rekanpo"], ["name:诸葛|亮"]],
	xin_xiahoudun: ["male", "wei", 4, ["reganglie", "xinqingjian"], ["name:夏侯|惇"]],
	zhangyì: ["male", "shu", 4, ["rezhiyi"]],
	jiakui: ["male", "wei", 3, ["zhongzuo", "wanlan"]],
	re_jikang: ["male", "wei", 3, ["new_qingxian", "new_juexiang"]],
	miheng: ["male", "qun", 3, ["kuangcai", "shejian"]],
	taoqian: ["male", "qun", 3, ["zhaohuo", "yixiang", "yirang"]],
	liuzan: ["male", "wu", 4, ["fenyin"]],
	lingcao: ["male", "wu", 4, ["dujin"]],
	sunru: ["female", "wu", 3, ["yingjian", "shixin"]],
	lifeng: ["male", "shu", 3, ["tunchu", "shuliang"]],
	zhuling: ["male", "wei", 4, ["xinzhanyi"]],
	liuye: ["male", "wei", 3, ["polu", "choulve"]],
	zhaotongzhaoguang: ["male", "shu", 4, ["yizan_use", "xinfu_longyuan"], ["name:赵|统-赵|广"]],
	majun: ["male", "wei", 3, ["xinfu_jingxie1", "qiaosi"]],
	simazhao: ["male", "wei", 3, ["xinfu_daigong", "xinfu_zhaoxin"], ["name:司马|昭"]],
	wangyuanji: ["female", "wei", 3, ["xinfu_qianchong", "xinfu_shangjian"]],
	pangdegong: ["male", "qun", 3, ["xinfu_pingcai", "xinfu_pdgyingshi"]],
	old_yuanshu: ["male", "qun", 4, ["xinyongsi", "yjixi"]],
	zhangbu: ["male", "wu", 4, ["mbchengxiong", "mbwangzhuang"]],
	mb_wangjing: ["male", "wei", 3, ["mbzujin", "mbjiejian"]],

	shenpei: ["male", "qun", "2/3", ["shouye", "liezhi"]],
	re_wangyun: ["male", "qun", 3, ["relianji", "remoucheng"], ["clan:太原王氏"]],

	re_baosanniang: ["female", "shu", 3, ["meiyong", "rexushen", "rezhennan"]],

	hujinding: ["female", "shu", "2/6", ["renshi", "wuyuan", "huaizi"]],

	re_zhanggong: ["male", "wei", 3, ["reqianxin", "rezhenxing"]],
	re_xugong: ["male", "qun", 3, ["rebiaozhao", "yechou"], ["doublegroup:wu:qun"]],
	re_weiwenzhugezhi: ["male", "wu", 4, ["refuhai"], ["name:卫|温-诸葛|直"]],

	xin_yuanshao: ["male", "qun", 4, ["reluanji", "xueyi"], ["zhu"]],
	re_liushan: ["male", "shu", 3, ["xiangle", "refangquan", "ruoyu"], ["zhu"]],
	re_sunben: ["male", "wu", 4, ["jiang", "rehunzi", "zhiba"], ["zhu"]],

	scs_zhangrang: ["male", "qun", "", ["scstaoluan"], ["unseen", "sex:male_castrated"]],
	scs_zhaozhong: ["male", "qun", "", ["scschiyan"], ["unseen", "sex:male_castrated"]],
	scs_sunzhang: ["male", "qun", "", ["scszimou"], ["unseen", "sex:male_castrated"]],
	scs_bilan: ["male", "qun", "", ["scspicai"], ["unseen", "sex:male_castrated"]],
	scs_xiayun: ["male", "qun", "", ["scsyaozhuo"], ["unseen", "sex:male_castrated"]],
	scs_hankui: ["male", "qun", "", ["scsxiaolu"], ["unseen", "sex:male_castrated"]],
	scs_lisong: ["male", "qun", "", ["scskuiji"], ["unseen", "sex:male_castrated"]],
	scs_duangui: ["male", "qun", "", ["scschihe"], ["unseen", "sex:male_castrated"]],
	scs_guosheng: ["male", "qun", "", ["scsniqu"], ["unseen", "sex:male_castrated"]],
	scs_gaowang: ["male", "qun", "", ["scsmiaoyu"], ["unseen", "sex:male_castrated"]],
};

export default characters;
