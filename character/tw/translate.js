const translates = {
	tw_beimihu: "TW卑弥呼",
	tw_beimihu_prefix: "TW",
	nashime: "难升米",
	tw_xiahouba: "TW夏侯霸",
	tw_xiahouba_prefix: "TW",
	tw_zumao: "TW祖茂",
	tw_zumao_prefix: "TW",
	tw_caoang: "TW曹昂",
	tw_caoang_prefix: "TW",
	tw_dingfeng: "TW丁奉",
	tw_dingfeng_prefix: "TW",
	tw_caohong: "TW将曹洪",
	tw_caohong_prefix: "TW将",
	tw_maliang: "TW马良",
	tw_maliang_prefix: "TW",

	twyanqin: "姻亲",
	twyanqin_info: "准备阶段，你可以将势力变更为魏或蜀。",
	twbaobian: "豹变",
	twbaobian_info: "当你使用【杀】或【决斗】造成伤害时，若目标角色的势力与你相同，则你可以防止此伤害，然后其将手牌数补充至与体力值相同。若不同且其手牌数大于体力值，则你可以将其手牌弃置至与其体力值相同。",
	twtijin: "替巾",
	twtijin_info: "当你攻击范围内的一名其他角色使用【杀】指定另一名其他角色为目标时，你可以将此【杀】的目标改为你。若如此做，此【杀】结算完成后，你弃置该角色的一张牌。",
	twxiaolian: "孝廉",
	twxiaolian_info: "当一名其他角色使用【杀】指定另一名其他角色为目标时，你可以将此【杀】的目标改为你。若如此做，当你受到此【杀】的伤害后，你可以将一张牌置于此【杀】原目标的武将牌旁，称为“马”，且令其获得如下效果：其他角色计算至其的距离+X（X为其武将牌旁的“马”数）。",
	twqijia: "弃甲",
	twqijia_info: "出牌阶段，你可以弃置一张装备区内的牌（每种类型的装备牌限一次），然后视为对攻击范围内的一名其他角色使用了一张【杀】。",
	twzhuchen: "诛綝",
	twzhuchen_info: "出牌阶段，你可以弃置一张【桃】或【酒】并选择一名其他角色。你与其的距离视为1直到此阶段结束。",
	twhuzhu: "护主",
	twhuzhu_info: "出牌阶段限一次，若你的装备区内有牌，则你可以令一名其他角色交给你一张手牌，然后获得你装备区内的一张牌。若其体力值不大于你，则你可以令其回复1点体力。",
	twliancai: "敛财",
	twliancai_info: "结束阶段，你可以将武将牌翻面，然后获得一名其他角色装备区内的一张牌。当你的武将牌翻面时，你可以将手牌补至与体力值相同。",
	twrangyi: "攘夷",
	twrangyi2: "攘夷",
	twrangyi_info: "出牌阶段限一次，你可以将所有手牌交给一名其他角色，然后令其选择一项：1.使用其中的一张牌，并于此牌被使用时将其余的牌交还给你。2.受到来自你的1点伤害。",
	twbaimei: "白眉",
	twbaimei_info: "锁定技，若你没有手牌，则防止你受到的所有属性伤害和锦囊牌造成的伤害。",
	chijie: "持节",
	chijie_info: "游戏开始时，你可以选择一个现存势力，你的势力视为该势力。",
	waishi: "外使",
	waishi_info: "出牌阶段限一次，你可以用至多X张牌交换一名其他角色等量的手牌（X为现存势力数），然后若其与你势力相同或手牌多于你，你摸一张牌。",
	renshe: "忍涉",
	renshe_info: "当你受到伤害后，你可以选择一项：将势力改为现存的另一个势力；或可以额外发动一次“外使”直到你的下个出牌阶段结束；或与另一名其他角色各摸一张牌。",
	tw_gexuan: "TW葛玄",
	tw_gexuan_prefix: "TW",
	twdanfa: "丹法",
	twdanfa_info: "准备阶段或结束阶段开始时，你可将一张牌置于武将牌上，称为“丹”。每回合每种花色限一次，当你使用牌时，若“丹”中有与此牌花色相同的牌，则你摸一张牌。",
	twlingbao: "灵宝",
	twlingbao_info: "出牌阶段限一次，你可以将两张花色不同的“丹”置入弃牌堆。若这两张牌：均为红色，你令一名其他角色回复1点体力；均为黑色，你弃置一名其他角色区域内至多两张区域不同牌；颜色不同，则你令一名角色摸一张牌，并令另一名角色弃置一张牌。",
	twsidao: "司道",
	twsidao_info: "游戏开始时，你选择一张“法宝”置入装备区。准备阶段，若你以此法选择的法宝在牌堆/弃牌堆中，则你使用之。",
	gx_lingbaoxianhu: "灵宝仙壶",
	gx_lingbaoxianhu_info: "锁定技，当你造成点数大于1的伤害后，或有角色死亡后，你加1点体力上限并回复1点体力。",
	gx_taijifuchen: "太极拂尘",
	gx_taijifuchen_info: "锁定技，当你使用【杀】指定目标后，你令目标角色选择一项：①弃置一张牌，若此牌和【杀】花色相同，则你获得之。②其不可响应此【杀】。",
	gx_chongyingshenfu: "冲应神符",
	gx_chongyingshenfu_info: "锁定技。①当你受到牌造成的伤害后，你记录此牌的名称。②当你受到〖冲应神符①〗记录过的牌造成的伤害时，你令此牌伤害-1。",
	tw_dongzhao: "TW董昭",
	tw_dongzhao_prefix: "TW",
	twmiaolve: "妙略",
	twmiaolve_info: "游戏开始时，你获得两张【瞒天过海】。当你受到1点伤害后，你可选择：①获得一张【瞒天过海】并摸一张牌。②获得一张智囊。",
	twyingjia: "迎驾",
	twyingjia_info: "一名角色的回合结束时，若你本回合内使用过两张或更多的同名锦囊牌，则你可弃置一张手牌并令一名角色进行一个额外回合。",
	dz_mantianguohai: "瞒天过海",
	dz_mantianguohai_info: "此牌不计入拥有者的手牌上限。出牌阶段，对一至两名区域内有牌的其他角色使用。你获得目标角色一张牌，然后依次交给每名目标角色各一张牌。",
	jiachong: "TW贾充",
	jiachong_prefix: "TW",
	beini: "悖逆",
	beini_info: "出牌阶段限一次，你可以选择一名体力值不小于你的角色，令你或其摸两张牌，然后未摸牌的角色视为对摸牌的角色使用一张【杀】。",
	dingfa: "定法",
	dingfa_info: "弃牌阶段结束时，若本回合你失去的牌数不小于你的体力值，你可以选择一项：1、回复1点体力；2、对一名其他角色造成1点伤害。",
	duosidawang: "朵思大王",
	equan: "恶泉",
	equan_info: "锁定技。①当有角色于你的回合内受到伤害后，其获得X枚“毒”（X为伤害值）。②准备阶段，你令所有拥有“毒”标记的角色移去所有“毒”标记并失去等量的体力。③当有角色因〖恶泉②〗进入濒死状态时，你令其所有技能失效直到回合结束。",
	manji: "蛮汲",
	manji_info: "锁定技。其他角色失去体力后，若你的体力值：不大于该角色，你回复1点体力；不小于该角色，你摸一张牌。",
	wuban: "TW吴班",
	wuban_prefix: "TW",
	jintao: "进讨",
	jintao_info: "锁定技，你使用【杀】无距离限制且次数上限+1。你于出牌阶段内使用的第一张【杀】伤害+1，第二张【杀】不可被响应。",
	yuejiu: "TW乐就",
	yuejiu_prefix: "TW",
	cuijin: "催进",
	cuijin_info: "当你或你攻击范围内的角色使用【杀】时，你可以弃置一张牌并获得如下效果：此【杀】的伤害值基数+1，且当此【杀】结算结束后，若未造成过伤害，则你对使用者造成1点伤害。",
	tw_zhaoxiang: "TW赵襄",
	tw_zhaoxiang_prefix: "TW",
	twfuhan: "扶汉",
	twfuhan_info: '限定技。准备阶段开始时时，你可以移去所有"梅影"标记，然后从五张未登场的蜀势力武将牌中选择一名获得其所有技能，将体力上限数调整为以此技能移去所有“梅影”标记的数量（最少为2，最多为8）并回复1点体力，然后从牌堆/弃牌堆/场上获得【梅影枪】。',
	twqueshi: "鹊拾",
	twqueshi_info: "游戏开始时，你将【梅影枪】置于你的装备区。",
	meiyingqiang: "梅影枪",
	meiyingqiang_info: "当你于其他角色的回合内第一次失去牌时，你可以使用一张【杀】。",
	tw_fuwan: "TW伏完",
	tw_fuwan_prefix: "TW",
	twmoukui: "谋溃",
	twmoukui_info: "当你使用【杀】指定目标后，你可以选择一项：①摸一张牌；②弃置该角色的一张牌；③背水：若此【杀】未因造成伤害而令该角色进入过濒死状态，则该角色弃置你的一张牌。",
	tw_yujin: "SP于禁",
	tw_yujin_prefix: "SP",
	xinzhenjun: "镇军",
	xinzhenjun_info: "出牌阶段开始时，你可以将一张牌交给一名其他角色，令其选择是否使用一张不为黑色的【杀】。若其选择是，则你于此【杀】结算完成后摸1+X张牌(X为此【杀】造成的伤害总点数)。若其选择否，则你对其或其攻击范围内的一名其他角色造成1点伤害。",
	tw_hucheer: "TW胡车儿",
	tw_hucheer_prefix: "TW",
	twshenxing: "神行",
	twshenxing_info: "锁定技。若你的装备区内没有坐骑牌，则你至其他角色的距离-1且手牌上限+1。",
	twdaoji: "盗戟",
	twdaoji_info: "出牌阶段限一次，你可以弃置一张非基本牌并选择一名攻击范围内的角色，获得其一张牌。若你以此法得到的牌为：基本牌，你摸一张牌；装备牌，你使用此牌并对其造成1点伤害。",
	tw_hejin: "TW何进",
	tw_hejin_prefix: "TW",
	twmouzhu: "谋诛",
	twmouzhu_info: "出牌阶段限一次，你可以选择一名其他角色A。你令除A外所有体力值小于等于你的其他角色依次选择是否交给你一张牌。若你以此法得到的牌数X：等于0，你和所有进行选择的角色依次失去1点体力。大于0，你令A选择由你视为对其使用一张伤害值基数为X的【杀】或【决斗】。",
	twyanhuo: "延祸",
	twyanhuo_info: "当你死亡时，你可以选择一项：①令一名其他角色弃置X张牌。②令X名其他角色依次弃置一张牌。（X为你的牌数）",
	tw_mayunlu: "TW马云禄",
	tw_mayunlu_prefix: "TW",
	twfengpo: "凤魄",
	twfengpo_info: "①当你使用【杀】或【决斗】指定唯一目标后，你可观看目标角色的手牌并选择一项：⒈摸X张牌。⒉令此牌的伤害值基数+X（X为其手牌中的♦数）。②当你杀死一名角色后，你将〖凤魄①〗中的“♦数”改为“红色牌数”。",
	tw_re_caohong: "TW曹洪",
	tw_re_caohong_prefix: "TW",
	twyuanhu: "援护",
	twyuanhu_info: "出牌阶段限一次。你可将一张装备牌置入一名角色的装备区内。若此牌为：武器牌，你弃置与其距离为1的另一名角色区域的一张牌；防具牌，其摸一张牌；坐骑牌或宝物牌，其回复1点体力。然后若其体力值或手牌数不大于你，则你摸一张牌，且你可以于本回合的结束阶段发动一次〖援护〗。",
	twjuezhu: "决助",
	twjuezhu_info: "限定技。准备阶段，你可废除一个坐骑栏，令一名角色获得〖飞影〗并废除判定区。该角色死亡后，你恢复以此法废除的装备栏。",
	tw_zangba: "TW臧霸",
	tw_zangba_prefix: "TW",
	twhanyu: "捍御",
	twhanyu_info: "锁定技。游戏开始时，你获得牌堆中的基本牌，锦囊牌，装备牌各一张。",
	twhengjiang: "横江",
	twhengjiang_info: "出牌阶段限一次，当你使用基本牌或普通锦囊牌指定唯一目标后，你可将此牌的目标改为攻击范围内的所有合法目标，然后你于此牌结算结束后摸X张牌（X为因响应此牌而使用或打出过牌的角色数）。",
	tw_huojun: "TW霍峻",
	tw_huojun_prefix: "TW",
	twsidai: "伺怠",
	twsidai_info: "限定技。出牌阶段，你可以将手牌区内的所有基本牌当做【杀】使用（无距离和次数限制）。若此牌对应的实体牌中：包含【闪】，则目标角色成为此牌的目标后，需弃置一张基本牌，否则不可响应此牌；包含【桃】，则当目标角色受到此牌的伤害后，其减1点体力上限；包含【酒】，则当目标角色受到此牌的伤害时，此伤害×2。",
	twjieyu: "竭御",
	twjieyu_info: "每轮限一次。结束阶段开始时，或当你于一轮内第一次受到伤害后，你可以弃置所有手牌，然后从弃牌堆中获得不同牌名的基本牌各一张。",
	tw_liuhong: "TW刘宏",
	tw_liuhong_prefix: "TW",
	twyujue: "鬻爵",
	twyujue_give: "鬻爵",
	twyujue_info: "①其他角色的出牌阶段内，可以交给你任意张牌（每阶段上限为两张）。②当你于回合外获得其他角色的一张牌后，你可令其选择本回合内未选择过的一项：⒈弃置攻击范围内一名角色的一张牌。⒉下一次使用牌时，从牌堆中获得一张同类别的牌。",
	twgezhi: "革制",
	twgezhi_info: "①当你于出牌阶段内首次使用某种类别的牌时，你可以重铸一张手牌。②出牌阶段结束时，若你本阶段内因〖革制①〗失去过至少两张牌，则你可以令一名角色选择获得一个其未获得过的效果：⒈攻击范围+2；⒉手牌上限+2；⒊加1点体力上限。",
	twfengqi: "烽起",
	twfengqi_info: "主公技，锁定技。①其他群势力角色发动〖鬻爵①〗时，将每阶段上限改为四张。②以其他角色为目标的〖革制②〗结算结束后，目标角色可以获得其武将牌上的主公技。",
	tw_caocao: "TW曹操",
	tw_caocao_prefix: "TW",
	twlingfa: "令法",
	twlingfa_info: "①第一轮游戏开始时，你可选择获得如下效果直到本轮结束：其他角色使用【杀】时，若其有牌，则其需弃置一张牌，否则受到你造成的1点伤害。②第二轮游戏开始时，你可选择获得如下效果直到本轮结束：其他角色使用【桃】结算结束后，若其有牌，则其需交给你一张牌，否则受到你造成的1点伤害。③第三轮游戏开始时，你失去〖令法〗并获得〖治暗〗。",
	twzhian: "治暗",
	twzhian_info: "每回合限一次。一名角色使用装备牌或延时锦囊牌后，你可选择：⒈弃置位于场上的此牌。⒉弃置一张手牌并获得位于场上的此牌。⒊对其造成1点伤害。",
	tw_zhangmancheng: "TW张曼成",
	tw_zhangmancheng_prefix: "TW",
	twfengji: "蜂集",
	twfengji_info: "出牌阶段开始时，若你没有“示”，则你可以将一张牌作为“示”置于武将牌上并施法：从牌堆中获得X张与“示”牌名相同的牌，然后移去“示”。",
	twyiju: "蚁聚",
	twyiju_info: "若你的武将牌上有“示”，则：①你使用【杀】的次数上限和攻击范围的基数改为你的体力值。②当你受到伤害时，你移去“示”，且令此伤害+1。",
	twbudao: "布道",
	twbudao_info: "限定技。准备阶段，你可减1点体力上限，回复1点体力并选择获得一个〖布道〗技能池里的技能（三选一）。然后你可以令一名其他角色也获得此技能并交给你一张牌。",
	twzhouhu: "咒护",
	twzhouhu_info: "出牌阶段限一次。你可以弃置一张红色手牌并施法：回复X点体力。",
	twharvestinori: "丰祈",
	twharvestinori_info: "出牌阶段限一次。你可以弃置一张黑色手牌并施法：摸2X张牌。",
	twzuhuo: "阻祸",
	twzuhuo_info: "出牌阶段限一次。你可以弃置一张非基本牌并施法：防止你受到的下X次伤害。",
	twzhouzu: "咒诅",
	twzhouzu_info: "出牌阶段限一次。你可以对一名其他角色施法：其弃置X张牌，然后你对其造成1点雷电伤害。",
	twhuangjin: "黄巾",
	twhuangjin_info: "锁定技。当你一名角色使用【杀】指定你为目标时，若此【杀】有点数，你判定，若点数与此【杀】点数差值不大于1，则此【杀】对你无效。",
	twguimen: "鬼门",
	twguimen_info: "锁定技。当你弃置牌时，若其中有♠牌，你为每一张♠牌判定，若此牌点数与结果之差不大于1，你对一名其他角色造成2点雷电伤害。",
	twdidao: "地道",
	twdidao_info: "一名角色的判定牌生效前，你可以打出一张牌作为判定牌并获得原判定牌。若你以此法打出的牌与原判定牌颜色相同，你摸一张牌。",
	tw_chengpu: "TW程普",
	tw_chengpu_prefix: "TW",
	twlihuo: "疠火",
	twlihuo2: "疠火",
	twlihuo3: "疠火",
	twlihuo_info: "①当你声明使用普【杀】后，你可以将此【杀】改为火【杀】。此牌使用结算结束后，若有角色因此【杀】造成的伤害进入过濒死状态，则你失去1点体力。②当你使用火【杀】选择目标后，你可为此牌增加一个目标。",
	twchunlao: "醇醪",
	twchunlao_info: "①准备阶段，若场上没有“醇”，则你可将一名角色区域内的一张牌置于其武将牌上，称为“醇”。②一名角色使用【杀】时，若其有“醇”，则其可以交给你一张牌，令此【杀】的伤害值基数+1。③一名角色进入濒死状态时，若其有“醇”，则你可以移去“醇”并摸一张牌，然后令其回复1点体力。",
	tw_guohuai: "TW郭淮",
	tw_guohuai_prefix: "TW",
	twjingce: "精策",
	twjingce_info: "当你于出牌阶段使用第X张牌结算完毕后，你可以摸两张牌（X为你的体力值）。若此阶段你此前已摸过牌或本回合造成过伤害，你获得一枚“策”标记。",
	yuzhang: "御嶂",
	yuzhang_info: "你可以弃置一枚“策”标记，然后跳过一个阶段。当你受到伤害后，你可弃置一枚“策”标记，然后选择一项：⒈令伤害来源弃置两张牌；⒉令伤害来源本回合不能再使用或打出牌。",
	tw_caozhao: "曹肇",
	twfuzuan: "复纂",
	twfuzuan_info: "出牌阶段限一次/当你受到伤害后/当你对其他角色造成伤害后，你可选择一名拥有转换技的角色，变更其的一个转换技的的状态。",
	twchongqi: "宠齐",
	twchongqi_info: "锁定技。游戏开始时，你令所有角色获得〖非服〗。然后你可减1点体力上限，令一名其他角色获得〖复纂〗。",
	twfeifu: "非服",
	twfeifu_info: "锁定技，转换技。阴：当你成为【杀】的唯一目标后；阳：当你使用【杀】指定唯一目标后；目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。",
	tw_wangchang: "TW王昶",
	tw_wangchang_prefix: "TW",
	twkaiji: "开济",
	twkaiji_info: "准备阶段，你可令至多X名角色各摸一张牌（X为本局游戏内进入过濒死状态的角色数+1）。若有角色以此法获得了非基本牌，则你摸一张牌。",
	twshepan: "慑叛",
	twshepan_info: "每回合限一次。当你成为其他角色使用牌的目标后，你可选择一项：⒈摸一张牌。⒉将其区域内的一张牌置于牌堆顶。然后若你的手牌数与其相等，则你将此技能的发动次数归零，且可以令此牌对你无效。",
	tw_wangcan: "TW王粲",
	tw_wangcan_prefix: "TW",
	twdianyi: "典仪",
	twdianyi_info: "锁定技。你的回合结束时，若你本回合内：造成过伤害，你弃置所有手牌；未造成过伤害，你将手牌数调整至四张。",
	twyingji: "应机",
	twyingji_wuxie: "应机",
	twyingji_info: "当你于回合外需要使用或打出一张基本牌或普通锦囊牌时，若你没有手牌，则你可摸一张牌，然后视为使用或打出此牌。",
	twshanghe: "觞贺",
	twshanghe_info: "限定技。当你进入濒死状态时，你可令所有其他角色依次交给你一张牌；若这些牌中没有【酒】，则你将体力回复至1点。",
	tw_wujing: "TW吴景",
	tw_wujing_prefix: "TW",
	twfenghan: "锋捍",
	twfenghan_info: "每回合限一次。当你使用【杀】或伤害类锦囊牌指定第一个目标后，你可令至多X名角色各摸一张牌（X为此牌的目标数）。",
	twcongji: "从击",
	twcongji_info: "当你的红色牌于回合外因弃置而进入弃牌堆后，你可令一名其他角色获得这些牌。",
	old_quancong: "TW全琮",
	old_quancong_prefix: "TW",
	zhenshan: "振赡",
	zhenshan_info: "每回合限一次，当你需要使用或打出一张基本牌时，你可以与一名手牌数少于你的角色交换手牌，视为使用或打出此牌。",
	tw_tianyu: "TW田豫",
	tw_tianyu_prefix: "TW",
	gz_tw_tianyu: "田豫",
	twzhenxi: "震袭",
	twzhenxi_info: "每回合限一次。当你使用【杀】指定目标后，你可选择一项：⒈弃置其X张手牌（X为你至其的距离）；⒉将其装备区或判定区内的一张牌移动到另一名角色的装备区或判定区内。若其体力值大于你或其体力值为全场最高，则你可以改为依次执行以上两项。",
	twyangshi: "扬师",
	twyangshi_info: "锁定技。当你受到伤害后，若场上有不在你攻击范围内的其他角色，则你令攻击范围+1；若没有，则你从牌堆中获得一张【杀】。",
	tw_puyangxing: "濮阳兴",
	twzhengjian: "征建",
	twzhengjian_info: "游戏开始时，你可选择获得一项效果：⒈其他角色的出牌阶段结束时，若其本阶段内未使用过非基本牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果二。⒉其他角色的出牌阶段结束时，若其本阶段内未得到过牌，则其须交给你一张牌，然后你可失去此效果并获得〖征建〗的效果一。",
	twzhongchi: "众斥",
	twzhongchi_info: "锁定技，限定技。当你因〖征建〗而得到牌后，若已经有至少X名角色因〖征建〗而交给你过牌（X为游戏人数的一半且向上取整），则你回复2点体力，且于本局游戏内受到渠道为【杀】的伤害+1，且你将〖征建〗中的“其须交给你一张牌”改为“你可对其造成1点伤害”。",
	tw_bingyuan: "邴原",
	twbingde: "秉德",
	twbingde_info: "出牌阶段限一次。你可以选择一个本阶段未选择过的花色并弃置一张牌，你摸等同于本阶段你使用此花色的牌数，然后若你以此法弃置的牌的花色与你选择的花色相同，你令你〖秉德〗于此阶段发动的次数上限+1。",
	twqingtao: "清滔",
	twqingtao_info: "①摸牌阶段结束时，你可以重铸一张牌。若此牌为【酒】或非基本牌，你摸一张牌。②结束阶段，若你本回合未发动〖清滔①〗，你可以发动〖清滔①〗。",
	tw_jiangji: "TW蒋济",
	tw_jiangji_prefix: "TW",
	twjichou: "急筹",
	twjichou_info: "①每回合限一次。你可以视为使用一张未被〖急筹①〗记录过的普通锦囊牌并记录此牌。②你无法响应或{使用对应实体牌包含你的手牌的}〖急筹①〗记录过的锦囊牌。③出牌阶段限一次。你可将手牌中任意张〖急筹①〗记录过的锦囊牌交给其他角色。",
	twjilun: "机论",
	twjilun_info: "当你受到伤害后，你可以摸X张牌（X为〖急筹①〗记录数且至少为1，至多为5），或视为使用一张〖急筹①〗记录过且未被〖机论〗记录过的普通锦囊牌并记录此牌。",
	tw_niufudongxie: "牛辅董翓",
	baonvezhi_faq: "关于暴虐值",
	baonvezhi_faq_info: "<br><li>当你造成或受到伤害后，你获得等量的暴虐值；<li>暴虐值的上限为5。",
	twjuntun: "军屯",
	twjuntun_info: "①游戏开始时或当其他角色死亡后，你可令一名角色获得〖凶军〗。②当其他角色造成伤害后，若其拥有〖凶军〗，你获得等同于此次伤害值的暴虐值。",
	twxiongxi: "凶袭",
	twxiongxi_info: "出牌阶段限一次。你可以弃置X张牌对一名其他角色造成1点伤害（X为你的暴虐值与暴虐值上限之差）。",
	twxiafeng: "黠凤",
	twxiafeng_info: "出牌阶段开始时，你可消耗至多3点暴虐值并获得如下效果直到回合结束：你使用的前X张牌没有距离和次数限制且不可被响应，你的手牌上限+X（X为你以此法消耗的暴虐值）。",
	tw_bn_1: "一点",
	tw_bn_2: "两点",
	tw_bn_3: "三点",
	tw_bn_1_bg: "一",
	tw_bn_2_bg: "二",
	tw_bn_3_bg: "三",
	twxiongjun: "凶军",
	twxiongjun_info: "锁定技，每回合限一次。当你造成伤害后，所有拥有〖凶军〗的角色摸一张牌。",
	tw_jianshuo: "蹇硕",
	twkunsi: "困兕",
	twkunsi_info: "出牌阶段，你可以视为对一名未以此法选择过的其他角色使用一张【杀】。若此【杀】未造成伤害，其获得〖令戮〗直到你下回合开始，且当你成为其〖令戮〗的目标后，其可令你于〖令戮〗失败时进行两次结算。",
	twlinglu: "令戮",
	twlinglu_info: "强令：①任务：执行角色于其下回合结束前造成的伤害不小于2点。②成功：其摸两张牌。③失败：其失去1点体力。",
	tw_mateng: "TW马腾",
	tw_mateng_prefix: "TW",
	twxiongzheng: "雄争",
	twxiongzheng_info: "一轮游戏开始时，①若你上一轮发动过〖雄争〗且选择过“雄争”角色，你可以选择一项：1.视为对任意名上一轮内未对“雄争”角色造成过伤害的角色依次使用一张【杀】；2.令任意名上一轮对“雄争”角色造成过伤害的角色摸两张牌。②你可以选择一名未以此法选择过的角色，称为“雄争”角色。",
	twluannian: "乱年",
	twluannian_info: "主公技。其他群势力角色的出牌阶段限一次。其可以弃置X张牌并对“雄争”角色造成1点伤害（X为所有角色于本轮发动〖乱年〗的次数+1）。",
	tw_baoxin: "TW鲍信",
	tw_baoxin_prefix: "TW",
	twmutao: "募讨",
	twmutao_info: "出牌阶段限一次。你可以选择一名角色，令其将手牌中所有的【杀】依次交给其下家开始的每一名角色。然后其对最后一名以此法获得【杀】的角色A造成X点伤害（X为A手牌中【杀】的数量且至多为2）。",
	twyimou: "毅谋",
	twyimou_info: "当一名角色受到伤害后，若其存活且你至其的距离不大于1，你可以选择一项：1.令其从牌堆中获得一张【杀】；2.令其将一张手牌交给另一名角色并摸两张牌；3.背水：将所有手牌交给其（若受伤角色为你则跳过此步骤），然后依次执行上述所有选项。",
	tw_liufuren: "刘夫人",
	twzhuidu: "追妒",
	twzhuidu_info: "出牌阶段限一次。你可以选择一名已受伤的其他角色并选择一项：1.对其造成1点伤害；2.弃置其装备区里的一张牌；3.背水：若该角色为女性，弃置一张牌，然后依次执行上述所有选项。",
	twshigong: "示恭",
	twshigong_info: "限定技。当你于回合外进入濒死状态时，你可以令当前回合角色选择一项：1.加1点体力上限并回复1点体力，摸一张牌，然后令你将体力回复至体力上限；2.弃置X张手牌，然后令你将体力回复至1点（X为其体力值）。",
	tw_wangling: "TW王淩",
	tw_wangling_prefix: "TW",
	twmibei: "秘备",
	twmibei_info: "使命技。①使命：使用每种类型且牌名不同的牌各两张。②成功：当你使用牌后，若你于本次事件完成了〖秘备①〗的使命，你获得〖谋立〗。③失败：出牌阶段结束时，若你本回合未使用过牌，你本回合手牌上限-1并重置〖秘备〗。",
	twxingqi: "星启",
	twxingqi_info: "觉醒技。准备阶段，若场上的牌数大于你的体力值，你回复1点体力，然后若〖秘备〗：未完成，你从牌堆中获得每种类型的牌各一张；已完成，本局游戏你使用牌无距离限制。",
	twmouli: "谋立",
	twmouli_backup: "谋立",
	twmouli_info: "每回合限一次。你可以使用牌堆中的一张基本牌。",
	tw_zhugeguo: "TW诸葛果",
	tw_zhugeguo_prefix: "TW",
	twqirang: "祈禳",
	twqirang_info: "当有装备牌进入你的装备区时，你可以从牌堆中获得一张锦囊牌，你本阶段使用此牌无距离限制且不可被响应，且当你使用此牌时，你可以为这张牌增加或减少一个目标。",
	twyuhua: "羽化",
	twyuhua_info: "锁定技。①你的非基本牌不计入手牌上限。②当你于回合外失去牌后，若其中有非基本牌，你可以卜算X，然后你可以摸X张牌（X为其中非基本牌数且至多为5）。",
	tw_fanchou: "TW樊稠",
	tw_fanchou_prefix: "TW",
	twxingluan: "兴乱",
	twxingluan_info: "结束阶段，你可以亮出牌堆顶的六张牌，然后你可以选择一种类型的牌并分配给任意角色（每名角色至多三张）。然后所有以此法得到过牌且得到的牌数不少于你的角色失去1点体力。",
	tw_xujing: "TW许靖",
	tw_xujing_prefix: "TW",
	twboming: "博名",
	twboming_info: "①出牌阶段限两次。你可以将一张牌交给一名其他角色。②结束阶段，若所有其他角色于此回合得到的牌数之和大于1，你摸两张牌。",
	twejian: "恶荐",
	twejian_info: "当其他角色得到你的牌后，若其有其他与此牌类型相同的牌，你可以令其选择一项：1.受到你造成的1点伤害；2.弃置这些牌。",
	tw_zhangfei: "TW张飞",
	tw_zhangfei_prefix: "TW",
	twxuhe: "虚吓",
	twxuhe_info: "当你使用的【杀】被【闪】抵消时，你可以令其选择一项：1.受到你造成的1点伤害；2.本回合你使用的下一张牌对其造成伤害时，此伤害+2。",
	tw_xuezong: "TW薛综",
	tw_xuezong_prefix: "TW",
	twjiexun: "诫训",
	twjiexun_info: "结束阶段，你可以选择一个花色并令一名其他角色摸等同于场上此花色牌数张牌，然后其弃置X张牌。若其以此法弃置了所有牌，你选择一项：1.摸X张牌，然后将X归零；2.修改〖复难〗和〖诫训〗（X为此前〖诫训〗的发动次数）。",
	twfunanx: "复难·改",
	twjiexunx: "诫训·改",
	twfunanx_info: "当其他角色使用或打出牌响应你使用的牌时，你可获得其使用或打出的牌。",
	twjiexunx_info: "结束阶段，你可选择一个花色并令一名其他角色摸等同于场上此花色牌数张牌，然后其弃置X张牌（X为此前〖诫训〗的发动次数）。",
	tw_zhangning: "TW张宁",
	tw_zhangning_prefix: "TW",
	twxingzhui: "星坠",
	twxingzhui_info: "出牌阶段限一次。你可以失去1点体力并施法：亮出牌堆顶2X张牌，若其中有黑色牌，则你可令一名其他角色获得这些黑色牌。若黑色牌的数量不小于X，则你对其造成X点雷电伤害。",
	twjuchen: "聚尘",
	twjuchen_info: "结束阶段，若你的手牌数和体力值均不为全场最多，则你可以令所有角色弃置一张牌，然后你获得其中的红色牌。",
	tw_yufuluo: "于夫罗",
	twjiekuang: "竭匡",
	twjiekuang_info: "每回合限一次。当一名体力值小于你的角色成为其他角色使用基本牌或普通锦囊牌的唯一目标后，若没有角色处于濒死状态，你可以失去1点体力或减1点体力上限，将此牌的目标转移给你。然后此牌结算结束后，若此牌未造成伤害且此牌的使用者是你使用此牌名的牌的合法目标，你视为对此牌的使用者使用一张同名牌。",
	twneirao: "内扰",
	twneirao_info: "觉醒技。准备阶段，若你的体力值与体力上限之和不大于9，你失去〖竭匡〗，弃置所有牌并从牌堆或弃牌堆中获得等量的【杀】，然后获得〖乱掠〗。",
	twluanlve: "乱掠",
	twluanlve_info: "①出牌阶段，你可以将X张【杀】当做【顺手牵羊】对一名本阶段未成为过【顺手牵羊】的目标的角色使用（X为你以此法使用【顺手牵羊】的次数）。②当你使用牌时，若此牌为【顺手牵羊】，你令此牌不能被响应。",
	tw_fengxí: "冯习",
	twqingkou: "轻寇",
	twqingkou_info: "准备阶段，你可以视为对一名其他角色使用一张【决斗】。然后此牌的伤害来源摸一张牌，若伤害来源包括你，你跳过本回合的判定阶段和弃牌阶段。",
	tw_zhangji: "张既",
	twdingzhen: "定镇", //丁真
	twdingzhen_info: "一轮游戏开始时，你可以选择任意名你至其距离不大于X的角色（X为你的体力值），这些角色选择一项：1.弃置一张【杀】；2.本轮其于回合内使用的第一张牌不能指定你为目标。",
	twyouye: "攸业",
	twyouye_info: "锁定技。①其他角色的结束阶段，若其本回合未对你造成过伤害且“蓄”数小于5，你将牌堆顶的牌置于武将牌上，称为“蓄”。②当你造成或受到伤害后，若你有“蓄”，你将所有“蓄”分配给任意角色（若当前回合角色存活，则你至少为当前回合角色分配一张）。",
	tw_xunchen: "TW荀谌",
	tw_xunchen_prefix: "TW",
	twweipo: "危迫",
	twweipo_info: "出牌阶段限一次。你可以令一名角色弃置一张牌，然后令其获得一张【兵临城下】或一张由你选择的智囊牌。",
	twmouzhi: "谋识",
	twmouzhi_info: "锁定技。当你受到伤害时，若伤害渠道对应的牌和你上次受到的伤害渠道对应的牌颜色相同，则你防止此伤害。",
	tw_jiangqing: "TW蒋钦",
	tw_jiangqing_prefix: "TW",
	twshangyi: "尚义",
	twshangyi_info: "出牌阶段限一次。你可以弃置一张牌并选择一名有手牌的其他角色，你令其观看你的手牌，然后你观看其手牌并选择一项：1.弃置其中一张牌；2.与其交换一张手牌。若你以此法弃置了其的黑色牌，或你与其交换的两张牌均为红色，你摸一张牌。",
	twxiangyu: "翔羽",
	twxiangyu_info: "锁定技。①你于回合内的攻击范围+X（X为本回合失去过牌的角色数且至多为5）。②当你使用【杀】指定目标后，若你至目标角色的距离小于你的攻击范围，你令此目标角色抵消此【杀】所需使用的【闪】数+1。",
	twgyshenxing: "慎行",
	twgyshenxing_info: "出牌阶段，你可以弃置X张牌，然后摸一张牌并获得1枚“慎”标记（X为你的“慎”数且至多为2）。",
	tw_guyong: "TW顾雍",
	tw_guyong_prefix: "TW",
	twbingyi: "秉壹",
	twbingyi_info: "结束阶段，你可以展示所有手牌，若这些牌的颜色均相同或类别均相同，你可以令至多Y名角色各摸一张牌（Y为你的手牌数）。若你以此法展示的牌数大于1且这些牌的颜色均相同且类别均相同，你移去所有“慎”。",
	twyilie: "毅烈",
	twyilie_info: "出牌阶段开始时，你可以选择一项：1.本阶段内使用【杀】的次数上限+1；2.本回合内使用【杀】指定处于连环状态的目标后，或使用【杀】被【闪】抵消时，摸一张牌；3.背水：失去1点体力，然后依次执行上述所有选项。",
	tw_chendong: "TW陈武董袭",
	tw_chendong_prefix: "TW",
	twfenming: "奋命",
	twfenming_info: "准备阶段，你可以选择一名其他角色并选择一项：1.令其弃置一张牌；2.令其横置；3.背水：横置，然后依次执行上述所有选项。",
	tw_handang: "TW韩当",
	tw_handang_prefix: "TW",
	twgongji: "弓骑",
	twgongji2: "弓骑",
	twgongji_info: "①你的攻击范围无限。②出牌阶段限一次，你可以弃置一张牌，然后你使用与此牌花色相同的【杀】无任何次数限制直到回合结束。若你以此法弃置的牌为装备牌，则你可以弃置一名其他角色的一张牌。",
	twjiefan: "解烦",
	twjiefan_info: "限定技。出牌阶段，你可以选择一名角色，令攻击范围内含有其的所有角色依次选择一项：1.弃置一张武器牌；2.令其摸一张牌。然后当其第一次进入濒死状态后，你重置〖解烦〗。",
	tw_jiling: "TW纪灵",
	tw_jiling_prefix: "TW",
	twshuangren: "双刃",
	twshuangren_info: "①出牌阶段开始时，你可以与一名角色拼点。若你：赢，你可以视为对至多两名至其的距离不大于1的角色依次使用一张【杀】；没赢，其可以视为对你使用一张【杀】。②出牌阶段结束时，若你本回合未发动过〖双刃①〗且未造成过渠道为【杀】的伤害，你可以弃置一张牌发动〖双刃①〗。",
	tw_re_fazheng: "TW法正",
	tw_re_fazheng_prefix: "TW",
	twxuanhuo: "眩惑",
	twxuanhuo_info: "摸牌阶段结束时，你可以交给一名其他角色两张牌，然后其选择一项：1.视为对你选择的另一名其他角色使用一张【杀】或【决斗】，2.令你获得其两张牌。",
	twenyuan: "恩怨",
	twenyuan1: "恩怨",
	twenyuan2: "恩怨",
	twenyuan_info: "①当你获得一名其他角色的至少两张牌后，你可以令其摸一张牌，若其手牌区或装备区没有牌，则你可以改为令其回复1点体力。②当你受到1点伤害后，你可令伤害来源选择一项：1.失去1点体力；2.交给你一张手牌，若此牌的花色不为♥，你摸一张牌。",
	tw_madai: "TW马岱",
	tw_madai_prefix: "TW",
	twqianxi: "潜袭",
	twqianxi2: "潜袭",
	twqianxi3: "潜袭",
	twqianxi2_bg: "潜",
	twqianxi3_bg: "袭",
	twqianxi_info: "准备阶段，你可以摸一张牌并弃置一张牌，令一名距离为1的角色本回合不能使用或打出与你弃置的牌颜色相同的手牌。然后本回合的结束阶段，若你本回合对其造成过渠道为【杀】的伤害，你令其不能使用或打出与你以此法弃置的牌颜色不同的牌直到其下回合结束。",
	tw_niujin: "TW牛金",
	tw_niujin_prefix: "TW",
	twcuorui: "挫锐",
	twcuorui_info: "限定技。准备阶段，你可以将手牌摸至X张（X为场上角色手牌数最多的角色的手牌数，且至多摸5张）。然后若你的判定区：未废除，你废除判定区；已废除，你可以对一名其他角色造成1点伤害。",
	twliewei: "裂围",
	twliewei_info: "锁定技。当你杀死一名角色后，你选择一项：1.摸两张牌；2.若你拥有〖挫锐〗且〖挫锐〗已发动过，重置〖挫锐〗。",
	tw_guanqiujian: "TW毌丘俭",
	tw_guanqiujian_prefix: "TW",
	twzhengrong: "征荣",
	twzhengrong_tag: "荣",
	twzhengrong_info: "当你于出牌阶段使用牌结算结束后，若此牌为你于本局游戏你的出牌阶段内使用的第偶数张指定了其他角色为目标的牌，或你于出牌阶段第一次造成伤害后，你可以将一名其他角色的一张牌置于你的武将牌上，称为“荣”。",
	twhongju: "鸿举",
	twhongju_info: "觉醒技。准备阶段，若你的“荣”数不小于3，你摸等同于“荣”数的牌，且可以用任意手牌交换等量的“荣”，获得〖清侧〗，然后可以减1点体力上限并获得〖扫讨〗。",
	twqingce: "清侧",
	twqingce_backup: "清侧",
	twqingce_info: "出牌阶段，你可以将一张“荣”置入弃牌堆并选择一名区域内有牌的角色，你弃置其区域里的一张牌。",
	twsaotao: "扫讨",
	twsaotao_info: "锁定技。你使用【杀】和普通锦囊牌不能被响应。",
	tw_daxiaoqiao: "TW大乔小乔",
	tw_daxiaoqiao_prefix: "TW",
	twxingwu: "星舞",
	twxingwu_info: "弃牌阶段开始时，你可以将一张牌置于武将牌上，称为“星舞”。然后你可移去三张“星舞”，弃置一名其他角色装备区里的所有牌，然后对其造成2点伤害（若其性别包含女性则改为1点伤害）。",
	twpingting: "娉婷",
	twpingting_info: "锁定技。①一轮游戏开始时或其他角色于你的回合内进入濒死状态时，你摸一张牌并将一张牌置于武将牌上，称为“星舞”。②若你有“星舞”，你视为拥有〖天香〗和〖流离〗。",
	tw_furong: "TW傅肜",
	tw_furong_prefix: "TW",
	twxuewei: "血卫",
	twxuewei_info: "每轮限一次。一名其他角色A的出牌阶段开始时，你可以选择另一名其他角色B，然后你令A选择一项：1.本回合不能对B使用【杀】且手牌上限-2；2.你视为对A使用一张【决斗】。",
	twliechi: "烈斥",
	twliechi_info: "当你受到伤害后，若伤害来源的体力值不小于你，你可以选择一项：1.令其将手牌数弃置至与你的手牌数相同；2.弃置其一张牌；3.背水：若你本回合进入过濒死状态，弃置一张装备牌，然后依次执行上述所有选项。",
	tw_yl_luzhi: "TW卢植",
	tw_yl_luzhi_prefix: "TW",
	twmingren: "明任",
	twmingren_info: "①游戏开始时，你摸一张牌，然后将一张手牌置于武将牌上，称为“任”。②出牌阶段开始时或出牌阶段结束时，你可以用一张牌替换“任”。",
	twzhenliang: "贞良",
	twzhenliang_info: "转换技。阴：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。阳：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。",
	tw_zhangnan: "张南",
	twfenwu: "奋武",
	twfenwu_info: "结束阶段，你可以失去1点体力并视为使用一张无距离限制的【杀】。若本回合你使用过的基本牌种数大于1，此【杀】伤害基数+1。",
	tw_huchuquan: "呼厨泉",
	twfupan: "复叛",
	twfupan_info: "当你造成或受到伤害后，你可以摸X张牌并将一张牌交给一名其他角色（X为伤害值）。若你此前：未以此法交给过该角色牌，你摸两张牌；以此法交给过该角色牌，你可{对其造成1点伤害，然后你不能再以此法交给其牌}。",
	tw_liuzhang: "TW刘璋",
	tw_liuzhang_prefix: "TW",
	twyaohu: "邀虎",
	twyaohu_info: "每轮限一次。回合开始时，你须选择场上的一个势力。该势力的角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：1.对你指定的另一名的其他角色使用一张【杀】（无距离限制）；2.本回合其使用伤害牌指定你为目标时须交给你两张牌，否则取消此目标。",
	tw_liwei: "TW李遗",
	tw_liwei_prefix: "TW",
	twjiaohua: "教化",
	twjiaohua_info: "当你或体力值最小的其他角色因摸牌而得到牌后，你可以令该角色从牌堆或弃牌堆中获得一张本次未获得的类别的牌（每种类别每回合限一次）。",
	tw_yanxiang: "TW阎象",
	tw_yanxiang_prefix: "TW",
	twkujian: "苦谏",
	twkujianx: "谏",
	twkujian_info: "出牌阶段限一次。你可以将至多三张手牌交给一名其他角色，称为“谏”，你获得以下效果：当其他角色使用或打出牌后，若其中有“谏”，你与其各摸一张牌；当其他角色不因使用或打出而失去牌后，若其中有“谏”，你与其各弃置一张牌。",
	twruilian: "睿敛",
	twruilian2: "睿敛",
	twruilian_info: "一轮游戏开始时，你可以选择一名角色。其下回合结束时，若其本回合弃置过至少两张牌，你可以选择其本回合弃置过的一种类别，你与其各从弃牌堆中获得一张此类别的牌。",
	tw_xiahouen: "夏侯恩",
	twfujian: "负剑",
	twfujian_info: "锁定技。①游戏开始时或准备阶段，若你的装备区里没有武器牌，你随机将牌堆中的一张武器牌置入装备区。②当你于回合外失去武器牌后，你失去1点体力。",
	twjianwei: "剑威",
	twjianwei_info: "①若你的装备区里有武器牌，你使用【杀】无视防具且拼点牌点数+X（X为你的攻击范围）。②{其他角色的准备阶段，其可以与你拼点}/{准备阶段，你可以与攻击范围内的一名角色拼点}。若你赢，你获得其每个区域内的各一张牌；若其赢，其获得你装备区里的武器牌。",
	tw_xiahoushang: "夏侯尚",
	twtanfeng: "探锋",
	twtanfeng_info: "准备阶段，你可以弃置一名其他角色区域内的一张牌，然后其选择一项：1.受到你造成的1点火焰伤害，然后令你跳过本回合的一个阶段（准备阶段和结束阶段除外）；2.将一张牌当做【杀】对你使用（有距离限制）。",
	tw_zongyu: "TW宗预",
	tw_zongyu_prefix: "TW",
	twzhibian: "直辩",
	twzhibian_info: "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，你可以选择一项：{1.将其区域里的一张牌移动到你的对应区域；2.回复1点体力；3.背水：弃置一张非基本牌，然后依次执行上述所有选项}；若你没赢，你失去1点体力。",
	twyuyan: "御严",
	twyuyan_info: "锁定技。当你成为体力值大于你的角色使用的【杀】的目标时，你令使用者选择一项：1.交给你一张点数大于此【杀】的牌（若此【杀】无点数则改为非基本牌）。2.取消此目标。",
	tw_zhouchu: "TW周处",
	tw_zhouchu_prefix: "TW",
	twguoyi: "果毅",
	twguoyi_info: "当你不因〖果毅〗使用【杀】或普通锦囊牌指定一名其他角色为目标后，若其体力值或手牌数最大，或你的手牌数不大于X（X为你已损失的体力值+1），你可令其选择一项：1.本回合不能使用或打出手牌；2.弃置X张牌。若条件均满足，或其于本回合两个选项均已选择过，则你于此牌结算结束后依次视为对此牌的所有目标使用一张名称和属性相同的牌。",
	twchuhai: "除害",
	twchuhai_info: "使命技。①使命：令至少两名其他角色进入濒死状态。②成功：一名角色的回合结束时，若你于本回合完成了〖除害①〗的使命，你废除判定区，然后每名其他角色依次交给你一张牌。③当你获得其他角色的牌后，你须将其中的一张牌置入弃牌堆。",
	tw_qiaogong: "TW桥公",
	tw_qiaogong_prefix: "TW",
	twyizhu: "遗珠",
	twyizhu_info: "①结束阶段，你摸两张牌，然后将两张牌随机插入牌堆前2X张牌的位置中，称为“遗珠”（X为角色数，选择牌的牌名对其他角色可见）。②当有其他角色使用“遗珠”指定唯一目标时，你可以选择一项：1.增加一个目标；2.取消此目标，增加一个目标。然后移除此牌对应的“遗珠”记录并摸一张牌。",
	twluanchou: "鸾俦",
	twluanchou_info: "出牌阶段限一次。你可以令两名角色获得〖共患〗直到你下次发动此技能。",
	twgonghuan: "共患",
	twgonghuan_info: "每回合限一次。当其他角色受到伤害时，若其拥有〖共患〗且其体力值不大于你，你可以将此伤害转移给你（不触发〖共患〗）。",
	tw_qiaorui: "TW桥蕤",
	tw_qiaorui_prefix: "TW",
	wangxing: "妄行",
	twxiawei: "狭威",
	twxiawei_info: "①游戏开始时，你将牌堆中的两张基本牌置于武将牌上，称为“威”。②回合开始时，你将所有“威”置入弃牌堆。③你可以将“威”如手牌般使用或打出。④妄行：准备阶段，你可以将牌堆顶的X+1张牌置于武将牌上，称为“威”。",
	twqiongji: "穷技",
	twqiongji_info: "锁定技。①每回合限一次。当你使用或打出“威”后，你摸一张牌。②当你受到伤害时，若你没有“威”，此伤害+1。",
	tw_bianfuren: "TW卞夫人",
	tw_bianfuren_prefix: "TW",
	twwanwei: "挽危",
	twwanwei_info: "每回合限一次。当一名体力值最小的角色受到伤害时：若该角色不为你，你可以防止此伤害，然后失去1点体力；若该角色为你，或你的体力上限最大，你可以于当前回合的结束阶段获得牌堆顶的牌并亮出牌堆底的牌，若展示的牌能被使用，你使用之。",
	twyuejian: "约俭",
	twyuejian_info: "出牌阶段限一次。你可以将X张牌置于牌堆顶或牌堆底（X为你的手牌数减你的手牌上限且至少为1）。若你以此法失去的牌数：不小于3，你的体力上限+1；不小于2，你回复1点体力；不小于1，你的手牌上限+1。",
	tw_chenzhen: "TW陈震",
	tw_chenzhen_prefix: "TW",
	twmuyue: "睦约",
	twmuyue_info: "出牌阶段限一次。你可以弃置一张牌并选择一个基本牌或普通锦囊牌的牌名，然后令一名角色从牌堆中获得一张此牌名的牌。若你以此法弃置的牌的牌名与你选择的牌名相同，你下次发动〖睦约〗无需弃牌。",
	twchayi: "察异",
	twchayi_info: "结束阶段，你可以选择一名其他角色，令其选择一项：1.展示所有手牌；2.下次使用牌时弃置一张牌。该角色的下个回合结束时，若其手牌数与其上一次成为〖察异〗目标后的手牌数不相同，其执行另一项。",
	tw_feiyi: "TW费祎",
	tw_feiyi_prefix: "TW",
	twshengxi: "生息",
	twshengxi_info: "①准备阶段，你可以获得一张【调剂盐梅】。②结束阶段，若你本回合使用过牌且未造成伤害，则你可以获得一张智囊并摸一张牌。",
	twkuanji: "宽济",
	twkuanji_info: "每回合限一次。当你的牌不因使用而进入弃牌堆后，你可以令一名其他角色获得其中的一张牌。",
	xia_wangyue: "王越",
	twyulong: "驭龙",
	twyulong_info: "当你使用【杀】指定第一个目标后，你可以与一名目标角色拼点。若你赢，且你此次的拼点牌为：黑色，此【杀】伤害+1；红色，此【杀】不可被响应。当此【杀】造成伤害后，若你赢，你令此【杀】不计入次数。",
	twjianming: "剑鸣",
	twjianming_info: "锁定技。每回合每种花色限一次，当你使用或打出【杀】时，你摸一张牌。",
	xia_liyàn: "李彦",
	twzhenhu: "震虎",
	twzhenhu_info: "当你使用伤害牌指定第一个目标时，你可以摸一张牌并与至多三名其他角色共同拼点。若你赢，此牌对所有本次拼点没赢的角色造成的伤害+1；若你没赢，你失去1点体力。",
	twlvren: "履刃",
	twlvren_info: "①当你对其他角色造成伤害时，你令其获得1枚“刃”标记。②当你使用伤害牌时，你可以额外指定一名有“刃”的角色并移去其所有“刃”。③你的拼点牌点数+2X（X为参与此次拼点的角色数）。",
	xia_tongyuan: "侠童渊",
	xia_tongyuan_prefix: "侠",
	twchaofeng: "朝凤",
	twchaofeng_backup: "朝凤",
	twchaofeng_info: "①你可以将一张【杀】当做【闪】、【闪】当做任意一种【杀】使用或打出。②出牌阶段开始时，你可以与至多三名角色共同拼点。赢的角色视为对所有没赢的角色使用一张火【杀】。",
	twchuanshu: "传术",
	twchuanshu_info: "限定技。准备阶段，你可以选择一名角色。直到你的下回合开始，其获得以下效果：1.当其拼点牌亮出时，此牌点数+3；2.其使用的下一张【杀】对除你外的角色造成伤害时，此伤害+1；3.若其不为你，其使用的下一张【杀】结算结束后，你摸等同于其因此【杀】造成的伤害值数的牌。",
	xia_xushu: "侠徐庶",
	xia_xushu_prefix: "侠",
	twjiange: "剑歌",
	twjiange_info: "每回合限一次。你可以将一张非基本牌当做【杀】使用或打出（无距离和次数限制，且不计入次数）。若此时不为你的回合，你摸一张牌。",
	twxiawang: "侠望",
	twxiawang_info: "当一名角色受到伤害后，若你至其的距离不大于1，你可以对伤害来源使用一张【杀】。当此【杀】结算结束后，若你造成过渠道为此牌的伤害，结束当前阶段。",
	tw_haomeng: "TW郝萌",
	tw_haomeng_prefix: "TW",
	twgongge: "攻阁",
	twgongge_info: "摧坚：你可以选择一项：1.摸X+1张牌。其响应此牌后，跳过你的下一个摸牌阶段；2.弃置其X+1张牌。此牌结算结束后，若其体力值不小于你，你交给其X张牌；3.此牌对其造成的伤害+X。此牌结算结束后，其回复X点体力。",
	tw_weixu: "魏续",
	twsuizheng: "随征",
	twsuizheng_info: "锁定技。游戏开始时，你选择一名其他角色，称为“随征”角色。你获得以下效果：当“随征”角色造成伤害后，你摸一张牌；当“随征”角色受到伤害后，你选择一项：1.失去1点体力，令其从牌堆或弃牌堆中获得一张【杀】或【决斗】；2.弃置两张基本牌，令其回复1点体力。",
	twtuidao: "颓盗",
	twtuidao_info: "限定技。准备阶段，若“随征”角色的体力值不大于2或“随征”角色已死亡，你可以废除你与其的一个坐骑栏并选择一个类别，然后若“随征”角色存活，你获得其所有此类别的牌，否则你从牌堆中获得两张此类别的牌。然后你将“随征”角色改为另一名角色。",
	tw_caoxiu: "TW曹休",
	tw_caoxiu_prefix: "TW",
	twqianju: "千驹",
	twqianju_info: "锁定技。①你计算与其他角色的距离-X（X为你装备区的牌数）。②每回合限一次。当你对距离为1以内的角色造成伤害后，若你的装备区存在空置装备栏，你从牌堆或弃牌堆中将一张你空置装备栏对应副类别的装备牌置于你的装备区。",
	twqingxi: "倾袭",
	twqingxi_info: "当你使用张【杀】指定目标后，若此牌为你于本回合使用的第一张【杀】，你可以令目标角色选择一项：1.令你摸Y张牌，此【杀】不可被其响应（Y为你装备区的牌数且至少为1）；2.若其装备区里有牌，弃置装备区里的所有牌，然后弃置你装备区里的等量张牌，令此【杀】对其造成的伤害+1。",
	tw_sunyi: "TW孙翊",
	tw_sunyi_prefix: "TW",
	twzaoli: "躁厉",
	twzaoli_info: "锁定技。①出牌阶段，你只能使用或打出你本回合得到的手牌。②出牌阶段开始时，你须弃置你区域内的所有装备牌并弃置任意张非装备手牌，你摸等量的牌，从牌堆中将你此次弃置的装备牌对应副类别的装备牌置入装备区。若你以此法置入了超过两张装备牌，你失去1点体力。",
	tw_yangyi: "TW杨仪",
	tw_yangyi_prefix: "TW",
	twgongsun: "共损",
	twgongsun_shadow: "共损",
	twgongsun_info: "锁定技。出牌阶段开始时，你选择攻击范围内的一名其他角色并选择一种花色，直至你的下个回合开始前或你死亡时，你与其均无法使用、打出或弃置该花色的手牌。",
	tw_dengzhi: "TW邓芝",
	tw_dengzhi_prefix: "TW",
	twjimeng: "急盟",
	twjimeng_info: "出牌阶段限一次。你可以获得一名其他角色区域内的一张牌，然后交给其一张牌。若其体力值不小于你，你摸一张牌。",
	xia_lusu: "侠鲁肃",
	xia_lusu_prefix: "侠",
	twkaizeng: "慨赠",
	twkaizeng_info: "其他角色的出牌阶段限一次。其可以选择一种基本牌的牌名或非基本牌的类型，然后令你选择是否交给其任意张手牌。若你以此法：交给其至少两张牌，你摸一张牌；交给其的牌中包含其选择的牌名或类型的牌，你获得一张与此牌名或类型不同的牌。",
	twyangming: "扬名",
	twyangming_info: "出牌阶段结束时，你可以摸X张牌，且令本回合的手牌上限+X（X为你本阶段使用过的牌的类型数）。",
	xia_dianwei: "侠典韦",
	xia_dianwei_prefix: "侠",
	twliexi: "烈袭",
	twliexi_info: "准备阶段，你可以弃置任意张牌并选择一名其他角色。若你以此法弃置的牌数大于其体力值，你对其造成1点伤害；否则其对你造成1点伤害。然后若你弃置的牌中有武器牌，你对其造成1点伤害。",
	twshezhong: "慑众",
	twshezhong_info: "结束阶段，若你：本回合对其他角色造成过伤害，你可以令至多X名其他角色下个摸牌阶段的额定摸牌数-1（X为你本回合造成的伤害值）；本回合受到过伤害，你可以将手牌摸至与其中一名伤害来源的体力值相同（至多摸至5）。",
	xia_zhaoe: "赵娥",
	twyanshi: "言誓",
	twyanshi_info: "①游戏开始时，你选择一名其他角色，称为“言誓”角色。②当你或“言誓”角色受到二者之外角色造成的伤害后，伤害来源获得1枚“誓”标记。③你对有“誓”的角色使用牌无距离限制。④当你对有“誓”的角色造成伤害时，此伤害+1，且当你对这些角色造成伤害后，你摸等同于伤害值的牌并移去其所有“誓”。",
	twrenchou: "刃仇",
	twrenchou_info: "锁定技。当你或“言誓”角色死亡时，若二者中的另一名角色A存活，A对杀死你或其的角色造成X点伤害（X为A的体力值）。",
	xia_xiahouzie: "夏侯紫萼",
	twxuechang: "血偿",
	twxuechang_info: "出牌阶段限一次。你可以与一名其他角色拼点。若你：赢，你获得其一张牌，若此牌为装备牌，你视为对其使用一张【杀】；没赢，其对你造成1点伤害，且你下次对其造成的伤害+1。",
	twduoren: "夺刃",
	twduoren_info: "①当你杀死角色后，你可以减1点体力上限，然后获得其所有的非主公技和非隐匿技。②当你令其他角色进入濒死状态时，你失去因〖夺刃①〗获得的技能。",
	tw_yangang: "严纲",
	twzhiqu: "直取",
	twzhiqu_info: "结束阶段，你可以选择一名其他角色并依次使用牌堆顶X张牌中的【杀】。搏击：依次使用牌堆顶X张牌中的锦囊牌（X为你距离不大于1内的角色数，且你或其以外的角色不是你以此法使用牌的合法目标）。",
	twxianfeng: "先锋",
	twxianfeng_info: "当你于出牌阶段使用【杀】或伤害类锦囊牌对其他角色造成伤害后，你可以令受伤角色选择一项：1.其摸一张牌，然后直到你下个回合开始时，你至其他角色的距离-1；2.你摸一张牌，然后直到你下个回合开始时，其至你的距离-1。",
	tw_gongsunfan: "公孙范",
	twhuiyuan: "回援",
	twhuiyuan_info: "当你于出牌阶段使用牌结算结束后，若你未于此阶段获得过此类型的牌，你可以展示一名角色的一张手牌，若此牌与你使用的牌类型相同，你获得此牌，否则你弃置此牌，然后其摸一张牌。游击：对其造成1点伤害。",
	twshoushou: "收绶",
	twshoushou_info: "①当你获得其他角色的牌时，若你在任意角色的攻击范围内，其他角色至你的距离+1。②当你造成或受到伤害后，若你不在任意其他角色的攻击范围内，其他角色至你的距离-1。",
	twshijun: "师君",
	twshijun_info: "主公技，其他群势力角色出牌阶段限一次，若你没有“米”，其可以摸一张牌，然后将一张牌置于你的武将牌上，称为“米”。",
	twjuxiang: "踞襄",
	twjuxiang_info: "主公技，其他群势力角色出牌阶段限一次，其可以选择其装备区的一张牌移动到你的装备区中，若你对应的装备栏已被废除，则改为交给你此装备牌，然后恢复你的对应装备栏。",
	tw_ol_sunjian: "TW孙坚",
	tw_ol_sunjian_prefix: "TW",
	twpolu: "破虏",
	twpolu_info: "主公技，当吴势力角色杀死一名角色或死亡后，你可以令任意名角色各摸X张牌（X为你此前发动过此技能的次数+1）。",
	tw_menghuo: "TW孟获",
	tw_menghuo_prefix: "TW",
	twqiushou: "酋首",
	twqiushou_info: "主公技，锁定技，当一张【南蛮入侵】结算结束后，若此牌造成的伤害大于3点或有角色因此死亡，所有蜀势力和群势力角色各摸一张牌。",
	twzhuiting: "坠廷",
	twzhuiting_info: "主公技，当一张锦囊牌即将对你生效时，其他魏势力角色和群势力角色可将一张与此牌颜色相同的牌当作【无懈可击】使用。",
	twniju: "逆拒",
	twniju_info: "主公技。当你的拼点牌亮出后，你可以令本次拼点事件中的一张拼点牌的点数+X或-X。然后当本次拼点事件结束后，若有两张拼点牌的点数相等，你摸X张牌（X为场上群势力角色数）。",
	ol_liuyu: "TW刘虞",
	ol_liuyu_prefix: "TW",
	twchongwang: "崇望",
	twchongwang_info: "主公技，其他群势力角色的出牌阶段开始时，其可以交给你一张牌，然后你与其使用【杀】或伤害性锦囊牌指定目标时不能指定对方为目标直至你的下回合结束（每名角色限发动一次）。",
	tw_zhangzhao: "张昭",
	twlijian: "力荐",
	twlijian_info: "昂扬技。其他角色的弃牌阶段结束时，你可以令其获得任意本阶段进入弃牌堆的牌（可不选），然后你获得其余的牌，若其得到的牌数大于你，你可以对其造成1点伤害。<br>激昂：八张牌进入弃牌堆。",
	twchungang: "纯刚",
	twchungang_info: "锁定技。一名其他角色于摸牌阶段外得到超过一张牌时，你令其弃置一张牌。",
	tw_zhanghong: "张纮",
	twquanqian: "劝迁",
	twquanqian_info: "昂扬技。出牌阶段限一次，你可以将至多四张花色各不相同的手牌交给一名其他角色，然后若你交出的牌数大于1，则你从牌堆中获得一张装备牌，然后选择一项：①将手牌数摸至与其相同；②观看其手牌并获得其一种花色的所有牌。<br>激昂：你弃置六张手牌。",
	twrouke: "柔克",
	twrouke_info: "锁定技。当你于摸牌阶段外得到超过一张牌时，你摸一张牌。",
	kaisa: "凯撒",
	zhengfu: "征服",
	zhengfu_info: "当你使用【杀】指定目标时，你可以选择一种牌的类别，然后除非目标角色交给你一种该类别的牌，否则其不能闪避此【杀】。",
	xia_xiahoudun: "侠夏侯惇",
	xia_xiahoudun_prefix: "侠",
	twdanlie: "胆烈",
	twdanlie_info: "①出牌阶段限一次。你可以与至多三名其他角色共同拼点。若你赢，你对没赢的角色依次造成1点伤害；若你没赢，你失去1点体力。②你的拼点牌点数+X（X为你已损失的体力值）。",
	xia_zhangwei: "张葳",
	twhuzhong: "护众",
	twhuzhong_info: "当你于出牌阶段使用无属性【杀】指定唯一目标角色时，你可以摸一张牌并选择一项：①为此牌额外选择一个目标；②弃置其一张手牌，此牌结算完毕后，若此牌造成过伤害，则你摸一张牌且本阶段可以额外使用一张【杀】。",
	twfenwang: "焚亡",
	twfenwang_info: "锁定技。①当你受到属性伤害时，你须弃置一张牌或令此伤害+1。②当你对其他角色造成非属性伤害时，若你的手牌数大于等于其，则此伤害+1。",
	xia_xiahousone: "夏侯子萼",
	twchengxi: "承袭",
	twchengxi_info: "出牌阶段每名角色限一次，你可以摸一张牌并与一名其他角色拼点。若你赢，你使用的下一张基本牌或非延时锦囊牌结算完毕后，你视为对原目标使用一张无次数限制的同名牌；若你没赢，其视为对你使用一张无距离限制的【杀】。",
	xia_liubei: "侠刘备",
	xia_liubei_prefix: "侠",
	twshenyi: "伸义",
	twshenyi_info: "每回合限一次，当你或你攻击范围内的一名角色于一回合内首次受到伤害后，你可以声明一种基本牌或锦囊牌（每种牌名限一次），然后从牌堆中将一张同名牌（若没有同名牌则改为同类型的牌）称为“侠义”置于武将牌上。若受伤角色不为你，则你可以将任意张手牌交给其，且当其失去一张你以此法交给其的牌后，你摸一张牌。",
	twxinghan: "兴汉",
	twxinghan_info: "①你的回合外或你处于濒死状态时，你可以如手牌般使用或打出“侠义”牌。②准备阶段，若“侠义”牌数大于存活角色数，则你可以依次使用其中所有可以使用的牌。然后你获得如下效果：回合结束时，你弃置所有手牌并失去X点体力（X为你的体力值-1且X至少为1）。",
	twxinghan_tag: "侠义",
	xia_guanyu: "侠关羽",
	xia_guanyu_prefix: "侠",
	twzhongyi: "忠义",
	twzhongyi_info: "锁定技。①你使用【杀】无距离限制。②当你使用【杀】结算完毕后，你选择一项：⒈摸X张牌；⒉回复X点体力；⒊背水：失去Y点体力，依次执行以上两项（X为受到此牌造成的伤害的角色数，Y为你本局游戏选择此项的次数）。",
	twchue: "除恶",
	twchue_info: "①当你使用【杀】指定唯一目标时，若场上存在可成为此【杀】目标的非目标角色，则你可以失去1点体力，为此牌额外指定Z个目标。②当你受到伤害或失去体力后，你摸一张牌并获得1个“勇”标记。③回合结束时，若你的“勇”标记数大于等于Z，则你可以失去Z个“勇”标记，视为使用一张伤害+1且可以额外指定Z个目标的【杀】。（Z为你的体力值）",
	xia_shitao: "石韬",
	twjieqiu: "劫囚",
	twjieqiu_info: "出牌阶段限一次，你可以选择一名装备区没有废除栏的其他角色，废除其所有装备栏，然后其摸X张牌（X为其废除装备栏前的装备区牌数），直到其恢复所有装备栏前：其弃牌阶段结束时，其恢复等同于其弃置牌数的装备栏；其回合结束时，若其仍有已废除的装备栏，则你执行一个额外回合（每轮限一次）。",
	twenchou: "恩仇",
	twenchou_info: "出牌阶段限一次，你可以观看一名存在废除装备栏的其他角色的手牌并获得其中一张牌，然后你恢复其一个装备栏。",
	xia_shie: "史阿",
	twdengjian: "登剑",
	twdengjianx: "剑法",
	twdengjian_info: "①其他角色的弃牌阶段结束时，你可以随机获得本回合所有造成伤害的牌对应的实体牌的其中一张与你本轮以此法获得的牌的颜色均不同的【杀】，称为“剑法”。②你使用“剑法”牌不计入次数限制。",
	twxinshou: "心授",
	twxinshou_info: "①当你于出牌阶段使用【杀】时，若此【杀】与你本回合使用的所有其他【杀】的颜色均不相同，则你可以选择执行以下一项本回合未执行过的项：⒈摸一张牌；⒉交给一名其他角色一张牌。②当你使用【杀】时，若〖心授①〗的两项本回合均已被你选择过，则你可以令〖登剑①〗失效并令一名其他角色获得〖登剑〗，你的下个回合开始时，其失去〖登剑〗，若其这期间使用【杀】造成过伤害，则你结束〖登剑①〗的失效状态。",
	xia_yuzhenzi: "玉真子",
	twhuajing: "化境",
	twhuajing_info: "①游戏开始时，你获得6个效果各不相同的无效果“武”标记。②一名拥有“武”标记的角色的攻击范围+X（X为其拥有的“武”标记数）。③出牌阶段限一次，你可以展示至多四张手牌，然后根据这些牌含有的花色数于本回合获得等量你拥有的“武”标记的效果。④拥有“武”标记效果的角色的武器牌失效（武器牌不提供攻击范围且武器技能失效）。",
	twhuajing_jian: "剑",
	twhuajing_jian_info: "当你使用【杀】指定目标后，你随机弃置目标角色两张牌。",
	twhuajing_dao: "刀",
	twhuajing_dao_info: "当你使用【杀】对没有手牌的目标角色造成伤害时，此伤害+1。",
	twhuajing_fu: "斧",
	twhuajing_fu_info: "当你使用的【杀】被【闪】响应后，你对目标角色造成1点伤害。",
	twhuajing_qiang: "枪",
	twhuajing_qiang_info: "当你使用黑色【杀】结算完毕后，你从牌堆或弃牌堆中获得一张【闪】。",
	twhuajing_ji: "戟",
	twhuajing_ji_info: "当你使用【杀】造成伤害时，你摸一张牌。",
	twhuajing_gong: "弓",
	twhuajing_gong_info: "当你使用【杀】造成伤害后，你随机弃置受伤角色装备区里的一张牌。",
	twtianshou: "天授",
	twtianshou_info: "锁定技，回合结束时，若你本回合使用【杀】造成过伤害，且你拥有本回合获得过效果的“武”标记，则你须将其中一个“武”标记交给一名其他角色并令其获得此标记的效果直到其回合结束，然后你摸两张牌。",
	tw_yanliang: "颜良",
	tw_wenchou: "文丑",
	tw_yuantan: "袁谭",
	twduwang: "独往",
	twduwang_info: "使命技。①出牌阶段开始时，你可以选择至多三名有牌的其他角色，摸X张牌（X为选择角色数+1），然后这些角色依次将一张牌当【决斗】对你使用。②当你处于濒死状态时，其他角色不能对你使用【桃】。③使命：使用【决斗】或成为【决斗】目标的次数之和不小于4（若游戏总人数小于4则改为3）。④成功：准备阶段，若你于你的上回合完成了〖独往③〗的使命，则你重置〖独往〗并将〖独往〗修改至只保留〖独往①〗的效果，选择一项：⒈获得〖狭勇〗；⒉重置〖延势〗并令其获得历战效果。⑤失败：当你死亡时，使命失败。",
	twylyanshi: "延势",
	twylyanshi_info: "限定技。你可以将一张【杀】当作【决斗】、【兵临城下】或任意智囊牌使用或打出。",
	twylyanshix: "延势·改",
	twylyanshix_info: "限定技。你可以将一张【杀】当作【决斗】、【兵临城下】或任意智囊牌使用或打出。历战：重置〖延势〗。",
	twjuexing: "绝行",
	twjuexing_info: "出牌阶段限一次。你可以视为对一名其他角色使用一张【决斗】。此牌对一名角色生效时，你与其将所有手牌扣置于武将牌上，然后各摸等同于当前体力值的牌。此牌结算结束后，你与所有目标角色弃置本次以此法摸的牌，然后获得扣置于武将牌上的牌。历战：当你因〖绝行〗摸牌时，摸牌数+1。",
	twxiayong: "狭勇",
	twxiayong1: "狭勇",
	twxiayong2: "狭勇",
	twxiayong_info: "锁定技。当你使用的【决斗】或目标角色包括你的【决斗】造成伤害时，若受伤角色为你，则你随机弃置一张手牌；否则你令此伤害+1。",
	twqiaosi: "峭嗣",
	twqiaosi_info: "结束阶段，你可以获得由其他角色区域直接置入或经由处理区置入弃牌堆的所有牌，然后若你以此法获得的牌数小于你的体力值，则你失去1点体力。",
	twbaizu: "败族",
	twbaizu_info: "锁定技。结束阶段，若你已受伤且你有手牌，则你须选择X名有手牌的其他角色（X为你的体力值），你与这些角色同时弃置一张手牌，然后你对与你弃置牌类别相同的所有其他角色各造成1点伤害。历战：〖败族〗目标选择数+1。",
	tw_zhugejun: "诸葛均",
	twshouzhu: "受嘱",
	twshouzhu_info: "出牌阶段开始时，你的同心角色可交给你至多四张牌。若你以此法得到的牌数X不小于2，其摸两张牌，然后执行同心：观看牌堆顶X张牌，然后将其中任意张牌以任意顺序置于牌堆底，将其余的牌置入弃牌堆。",
	twdaigui: "待归",
	twdaigui_info: "出牌阶段结束时，若你手牌的颜色均相同，你可以选择至多Y名角色并亮出牌堆底等量的牌，然后这些角色依次选择并获得其中一张（Y为你的手牌数）。",
	twcairu: "才濡",
	twcairu_info: "每回合每种牌名限两次。你可以将两张颜色不同的牌当【火攻】、【铁索连环】或【无中生有】使用。",
	simafu: "TW司马孚",
	simafu_prefix: "TW",
	xunde: "勋德",
	xunde_info: "一名角色受到伤害后，若你至其的距离不大于1，则你可判定。若判定结果：大于5，你令该角色获得判定牌；小于7，你令伤害来源弃置一张手牌。",
	chenjie: "臣节",
	chenjie_info: "一名角色的判定牌生效前，你可打出一张花色相同的牌。系统将你打出的牌作为新判定牌，将原判定牌置入弃牌堆。然后你摸两张牌。",
	huan_weiyan: "幻魏延",
	huan_weiyan_prefix: "幻",
	twqiji: "奇计",
	twqiji_info: "出牌阶段开始时，你可以视为对一名其他角色使用X张无距离限制且不计入次数的【杀】，此【杀】指定目标时，其可以选择一名本回合未以此法选择的其他角色，被选择的角色摸一张牌，然后其可以将此【杀】的目标转移给自己（X为出牌阶段开始时你手牌的类型数）。",
	twpiankuang: "偏狂",
	twpiankuang_info: "锁定技，你使用的牌造成的伤害+Y（Y为你本回合使用过的且造成过伤害的相同牌名的牌的数量，且至多为3）。",
	huan_simayi: "幻司马懿",
	huan_simayi_prefix: "幻",
	twzongquan: "纵权",
	twzongquan_info: "准备阶段或结束阶段，你可以选择一名角色，然后你进行判定：若为红色：你令其摸一张牌；若为黑色：你令其弃置一张牌。 若你本次选择的目标与上次相同但判定结果不同，则摸或弃置的牌数改为三。然后你令一名角色获得判定牌。",
	twguimou: "鬼谋",
	twguimou_info: "每回合限两次，当一名角色的判定牌生效前，你可以观看牌堆底的四张牌，打出其中一张牌代替之，然后将其余牌以任意顺序置于牌堆顶。",
	huan_zhaoyun: "幻赵云",
	huan_zhaoyun_prefix: "幻",
	huan_zhaoyun_A: "技一",
	huan_zhaoyun_A_info: "其他角色的出牌阶段开始时，若其在你攻击范围内，你可以摸一张牌，然后其视为对你使用一张无距离限制的普通【杀】（计入【杀】的使用次数）。",
	huan_zhaoyun_B: "技二",
	huan_zhaoyun_B_info: "觉醒技，当你进入濒死状态时，你将体力值回复至2点，此后的五个回合，你视为拥有技能〖龙胆〗和〖冲阵〗，且你计算与其他角色的距离视为1。",
};

export default translates;
