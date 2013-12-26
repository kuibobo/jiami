/********************           
Name:       jiami script
Date:       2012/09/18
Version:    1.0
Author:     Lujun
********************/

//f**k ie678
$(document).ready(function() {
    if ($.browser.msie && $.browser.version < "9.0") {
        $('#container').html('<div class="ui-notice"><h2>F**k ie(678)!</h2><ul class="list-browser"><li class="chrome"><a target="_blank" href="http://www.google.com/chrome">谷歌浏览器</a></li><li class="ie"><a target="_blank" href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie">IE9浏览器</a></li><li class="firefox"><a target="_blank" href="http://www.firefox.com/">火狐浏览器</a></li><li class="safari"><a target="_blank" href="http://support.apple.com/downloads/#safari">Safari浏览器</a></li><li class="opera"><a target="_blank" href="http://www.operachina.com/">Opera浏览器</a></li></ul></div>');
    }
});

// tips
(function($) {
    $.tips = function(txt) {
        var content_tips = '<div id="tips" class="ui-tips-wrap"><div class="ui-tips-bg"></div><div class="ui-tips"><span class="ico ico-tips"></span><p></p></div></div>';
        $('body').append(content_tips);    
        $('#tips p').html(txt);
        $('#tips').fadeIn();
        setTimeout(function() {
            $('#tips').fadeOut();
        },
        (1000));
    };
})(jQuery);

// user
var user = {
    "rows":[
        {"id":"0","n":"admin","jm":"1"},
        {"id":"1","n":"卢军","jm":"0"},
        {"id":"2","n":"方旭","jm":"0"},
        {"id":"3","n":"万卷书","jm":"0"},
        {"id":"4","n":"蒋曲波","jm":"0"},
        {"id":"5","n":"刘鹏飞","jm":"0"},
        {"id":"6","n":"陈奕佳","jm":"0"},
        {"id":"7","n":"陈洪飞","jm":"0"},
        {"id":"8","n":"朱允仿","jm":"0"},
        {"id":"9","n":"吴希","jm":"0"},
        {"id":"10","n":"吴清庆","jm":"0"},
        {"id":"11","n":"吴韩儒","jm":"0"}
        ]
    };
// menu
var menu = {
    "rows": [
            {"id":"0","h": "港饮港食","a": "国贸店","t": "68551100 , 68527227 , 13637655342","c":[
                {"i":"0-01","m":"琵琶鸭","p":"16","t":"☆☆☆☆☆"},
                {"i":"0-02","m":"香炸鸡翅饭","p":"17","t":"☆☆☆☆"},
                {"i":"0-03","m":"蜜汁肥叉饭","p":"18","t":"☆☆☆"},
                {"i":"0-04","m":"鸭腿饭","p":"18","t":"☆☆☆"},
                {"i":"0-05","m":"香炸鸡腿饭","p":"18","t":"☆☆☆"},
                {"i":"0-06","m":"蜜汁排骨饭","p":"19","t":"☆☆☆"},
                {"i":"0-07","m":"白切文昌鸡饭","p":"18","t":"☆☆☆"},
                {"i":"0-08","m":"豉油鸡饭","p":"18","t":"☆☆☆"},
                {"i":"0-09","m":"脆皮烧肉饭","p":"21","t":"☆☆☆"},
                {"i":"0-10","m":"烧味双拼饭","p":"20","t":"☆☆☆"},
                {"i":"0-11","m":"烧味五味饭","p":"22","t":"☆☆☆"},
                {"i":"0-12","m":"一哥鸡扒饭（赠饮）","p":"23","t":"☆☆☆"},
                {"i":"0-13","m":"干炒牛肉河","p":"16","t":"☆☆☆"},
                {"i":"0-14","m":"扬州炒饭","p":"16","t":"☆☆☆"},
                {"i":"0-15","m":"萝卜牛腩饭","p":"19","t":"☆☆☆"},
                {"i":"0-16","m":"猪舍卤蛋饭","p":"12","t":"☆☆☆"},
                {"i":"0-17","m":"鸭脖卤蛋饭","p":"14","t":"☆☆☆"},
                {"i":"0-18","m":"腊肠鸭剩饭","p":"14","t":"☆☆☆"},
                {"i":"0-19","m":"香煎秋刀鱼饭","p":"15","t":"☆☆☆"},
                {"i":"0-20","m":"卤肉豆腐饭","p":"14","t":"☆☆☆"},
                {"i":"0-21","m":"红烧排骨饭","p":"19","t":"☆☆☆"},
                {"i":"0-22","m":"红烧猪脚饭","p":"18","t":"☆☆☆"},
                {"i":"0-23","m":"番茄牛肉饭","p":"23","t":"☆☆☆"},
                {"i":"0-24","m":"茄汁海鲜饭","p":"23","t":"☆☆☆"},
                {"i":"0-25","m":"深海马鲛鱼饭","p":"23","t":"☆☆☆"}
            ]},
            {"id":"1","h": "十八碗","a": "国贸店","t": "68517699 , 68517627","c":[
                {"i":"1-01","m":"米饭","p":"1","t":"☆☆☆☆☆"},
                {"i":"1-02","m":"蒸水蛋","p":"4","t":"☆☆☆☆☆"},
                {"i":"1-03","m":"平锅豆腐","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-04","m":"农家煎豆腐","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-05","m":"大碗脆莲藕","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-06","m":"香椿煎蛋","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-07","m":"农家茄子煲","p":"16","t":"☆☆☆☆☆"},
                {"i":"1-08","m":"腐竹焖粉丝","p":"16","t":"☆☆☆☆☆"},
                {"i":"1-09","m":"香干回锅肉","p":"18","t":"☆☆☆☆☆"},
                {"i":"1-10","m":"农家小炒肉","p":"19","t":"☆☆☆☆☆"},
                {"i":"1-11","m":"鸡汁脆笋","p":"19","t":"☆☆☆☆☆"},
                {"i":"1-12","m":"农家辣子鸡","p":"19","t":"☆☆☆☆☆"},
                {"i":"1-13","m":"农家一碗香","p":"20","t":"☆☆☆☆☆"},
                {"i":"1-14","m":"酸辣鸡杂","p":"20","t":"☆☆☆☆☆"},
                {"i":"1-15","m":"大碗水晶粉丝","p":"20","t":"☆☆☆☆☆"},
                {"i":"1-16","m":"干花菜烧五花肉","p":"21","t":"☆☆☆☆☆"},
                {"i":"1-17","m":"板栗烧鸡","p":"21","t":"☆☆☆☆☆"},
                {"i":"1-18","m":"外婆菜炒肥肠","p":"21","t":"☆☆☆☆☆"},
                {"i":"1-19","m":"农家牛肉","p":"22","t":"☆☆☆☆☆"},
                {"i":"1-20","m":"回味茶树菇","p":"22","t":"☆☆☆☆☆"},
                {"i":"1-21","m":"小芹菜烩牛肉","p":"23","t":"☆☆☆☆☆"},
                {"i":"1-22","m":"土芹猪肝","p":"22","t":"☆☆☆☆☆"},
                {"i":"1-23","m":"外婆菜炒汤圆","p":"22","t":"☆☆☆☆☆"},
                {"i":"1-24","m":"干锅茶树菇","p":"23","t":"☆☆☆☆☆"},
                {"i":"1-25","m":"干锅肥肠","p":"23","t":"☆☆☆☆☆"},
                {"i":"1-26","m":"铁板牛肉","p":"26","t":"☆☆☆☆☆"},
                {"i":"1-27","m":"十八碗手撕鸡","p":"25","t":"☆☆☆☆☆"},
                {"i":"1-28","m":"糖醋鲤鱼","p":"26","t":"☆☆☆☆☆"},
                {"i":"1-29","m":"红烧鲤鱼","p":"26","t":"☆☆☆☆☆"},
                {"i":"1-30","m":"红烧肉丸","p":"28","t":"☆☆☆☆☆"},
                {"i":"1-31","m":"番茄炒蛋","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-32","m":"清炒/蒜蓉/菜心","p":"10","t":"☆☆☆☆☆"},
                {"i":"1-33","m":"清炒/蒜蓉/油麦菜","p":"10","t":"☆☆☆☆☆"},
                {"i":"1-34","m":"清炒/蒜蓉/空心菜","p":"10","t":"☆☆☆☆☆"},
                {"i":"1-35","m":"清炒/酸辣/土豆丝","p":"10","t":"☆☆☆☆☆"},
                {"i":"1-36","m":"手撕包菜","p":"11","t":"☆☆☆☆☆"},
                {"i":"1-37","m":"蒜蓉地瓜叶","p":"10","t":"☆☆☆☆☆"},
                {"i":"1-38","m":"豆角茄子","p":"12","t":"☆☆☆☆☆"},
                {"i":"1-39","m":"香嫂豆腐","p":"13","t":"☆☆☆☆☆"},
                {"i":"1-40","m":"农家上海青","p":"16","t":"☆☆☆☆☆"}
            ]},
            {"id":"2","h":"串门子","a":"国贸店","t":"66742018","c":[
                {"i":"2-01","m":"鸡腿饭","p":"20","t":"☆☆☆☆☆"},
                {"i":"2-02","m":"香酥排骨饭","p":"16","t":"☆☆☆☆☆"},
                {"i":"2-03","m":"台湾香肠饭","p":"15","t":"☆☆☆☆☆"},
                {"i":"2-04","m":"高雄烧肉饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-05","m":"肉燥饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-06","m":"鸡排饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-07","m":"鱼香肉丝","p":"12","t":"☆☆☆☆"},
                {"i":"2-08","m":"鱼排饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-09","m":"嘉义鸡丝饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-10","m":"青椒肉丝饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-11","m":"宝岛炒饭","p":"12","t":"☆☆☆☆"},
                {"i":"2-12","m":"鸡翅饭","p":"13","t":"☆☆☆☆"},
                {"i":"2-13","m":"回锅肉饭","p":"13","t":"☆☆☆☆"},
                {"i":"2-14","m":"控肉饭","p":"14","t":"☆☆☆☆"},
                {"i":"2-15","m":"秋刀鱼饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-16","m":"笋干猪脚饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-17","m":"沙茶猪肉饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-18","m":"咖喱鸡饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-19","m":"香菇鸡饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-20","m":"宫保鸡丁饭","p":"15","t":"☆☆☆☆"},
                {"i":"2-21","m":"糖醋里脊肉饭","p":"16","t":"☆☆☆☆"},
                {"i":"2-22","m":"卤排骨饭","p":"16","t":"☆☆☆☆"},
                {"i":"2-23","m":"豆鼓鸡腿肉饭","p":"16","t":"☆☆☆☆"},
                {"i":"2-24","m":"虾卷饭","p":"16","t":"☆☆☆☆"},
                {"i":"2-25","m":"豆鼓排骨饭","p":"18","t":"☆☆☆☆"},
                {"i":"2-26","m":"糖醋排骨饭","p":"18","t":"☆☆☆☆"},
                {"i":"2-27","m":"牛腩饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-28","m":"咖喱牛腩饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-29","m":"红烧牛腩饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-30","m":"黑椒猪扒饭","p":"20","t":"☆☆☆☆"},
                {"i":"2-31","m":"咖喱猪扒饭","p":"20","t":"☆☆☆☆"},
                {"i":"2-32","m":"沙茶牛肉饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-33","m":"三杯中卷","p":"20","t":"☆☆☆☆"},
                {"i":"2-34","m":"滑蛋（尖椒）牛肉饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-35","m":"马鲛鱼饭","p":"22","t":"☆☆☆☆"},
                {"i":"2-36","m":"虱目鱼饭（/片）","p":"30","t":"☆☆☆☆"}
            ]},
            {"id":"3","h":"韩堂春","a":"国贸店","t":"68526360","c":[
                {"i":"3-01","m":"猪脚套餐","p":"16","t":"☆☆☆☆☆"},
                {"i":"3-02","m":"牛腩套餐","p":"14","t":"☆☆☆☆☆"},
                {"i":"3-03","m":"农家猪脚（无饭）","p":"13","t":"☆☆☆☆☆"},
                {"i":"3-04","m":"特制卤肉（无饭）","p":"12","t":"☆☆☆☆☆"},
                {"i":"3-05","m":"清炖牛腩盅（无饭）","p":"10","t":"☆☆☆☆☆"},
                {"i":"3-06","m":"米饭","p":"2","t":"☆☆☆☆☆"}
            ]},
            {"id":"4","h":"荷香笼仔饭","a":"国贸店","t":"68539166、68513066","c":[
                {"i":"4-01","m":"九九一品饭","p":"10","t":"☆☆☆☆☆"},
                {"i":"4-02","m":"滋补猪肝饭","p":"10","t":"☆☆☆☆☆"}, 
                {"i":"4-03","m":"耗油肉片饭","p":"10","t":"☆☆☆☆☆"}, 
                {"i":"4-04","m":"鼓汁鱼腩饭","p":"10","t":"☆☆☆☆☆"}, 
                {"i":"4-05","m":"一品腊肠饭","p":"11","t":"☆☆☆☆☆"}, 
                {"i":"4-06","m":"肉片腊肠饭","p":"11","t":"☆☆☆☆☆"}, 
                {"i":"4-07","m":"鲜酱排骨饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-08","m":"猪肝肉片饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-09","m":"冬菇滑鸡饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-10","m":"美极牛肉饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-11","m":"盐焗鸡肾饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-12","m":"和味猪手饭","p":"12","t":"☆☆☆☆☆"}, 
                {"i":"4-13","m":"木耳焖花腩饭","p":"12","t":"☆☆☆☆☆"},
                {"i":"4-14","m":"支竹焖咸水鸭饭","p":"12","t":"☆☆☆☆☆"},  
                {"i":"4-15","m":"排骨鱼腩饭","p":"13","t":"☆☆☆☆☆"},
                {"i":"4-16","m":"金牌腊味饭","p":"13","t":"☆☆☆☆☆"},  
                {"i":"4-17","m":"牛肉腊肠饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-18","m":"排骨滑鸡饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-19","m":"排骨牛肉饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-20","m":"牛肉窝蛋饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-21","m":"四宝腊味饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-22","m":"排骨曼鱼干饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-23","m":"和味牛腩饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-24","m":"鱼腩猪手饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-25","m":"梅菜扣肉饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-26","m":"排骨腊鸭饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-27","m":"腊味猪腰饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-28","m":"咸鱼花腩饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-29","m":"腊味猪肝饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-30","m":"排骨腊味饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-31","m":"滑鸡腊肠饭","p":"13","t":"☆☆☆☆☆"}, 
                {"i":"4-32","m":"招牌黄鳝饭","p":"15","t":"☆☆☆☆☆"}, 
                {"i":"4-33","m":"国药田鸡饭","p":"15","t":"☆☆☆☆☆"}, 
                {"i":"4-34","m":"黄鳝牛肉饭","p":"16","t":"☆☆☆☆☆"}, 
                {"i":"4-35","m":"国药乳鸽饭","p":"18","t":"☆☆☆☆☆"}, 
                {"i":"4-36","m":"乳鸽腊味饭","p":"20","t":"☆☆☆☆☆"}, 
                {"i":"4-37","m":"至尊孖宝饭","p":"22","t":"☆☆☆☆☆"} 
            ]},
            {"id":"5","h":"广味烧腊","a":"国贸店","t":"68511632、13876072827","c":[
                {"i":"5-01","m":"烤鸭套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-02","m":"鸭腿套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-03","m":"猪脚套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-04","m":"牛腩套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-05","m":"叉烧套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-06","m":"文昌鸡套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-07","m":"白切鸭套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-08","m":"炸鸡腿套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-09","m":"炸鸡翅套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-10","m":"糖醋鱼套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-11","m":"秋刀鱼套餐","p":"10","t":"☆☆☆☆☆"},
                {"i":"5-12","m":"梅菜扣肉套餐","p":"10","t":"☆☆☆☆☆"}
            ]}
        ]        
    };

// getMenuData  jSelectMenu
function getMenuData() {
    if(menu != ''){
        var menuTitle ='';
        var orderList = '';
        for (var i = 0; i < menu.rows.length; i++) {         
            menuTitle +=  '<option value="'+menu.rows[i].id+'">'+menu.rows[i].h+'（'+menu.rows[i].a+' - '+menu.rows[i].t+'）</option>';
            var menuList = '';
            menuList += '<tbody id="ty-'+menu.rows[i].id+'">';
            for (var j = 0; j < menu.rows[i].c.length; j++) { 
                menuList += '<tr id="tr-'+menu.rows[i].c[j].i+'"><td width="10%" class="i">'+menu.rows[i].c[j].i+'</td><td width="40%" class="m">'+menu.rows[i].c[j].m+'</td><td width="20%" class="p">'+menu.rows[i].c[j].p+'</td><td width="20%" class="t">'+menu.rows[i].c[j].t+'</td><td width="20%" class="fn-tr"><input type="button" name="btnBuy" value="Order" /></td></tr>';  
            } 
            menuList += '</tbody>';
            $('#jTbMenu').append(menuList);
            $('#jSelectRice, #jSelectMenu').html(menuTitle);            
            orderList += '<tbody id="tys-'+menu.rows[i].id+'"></tbody>';
            $('#jTbOrder').html(orderList);
        };
    } else {
        $.tips('出错了，你人品真差！');
    }
};
// 获取订单数据
function GetOrderData() {
    $.ajax({
        type: 'get',
        url: 'data/orz.php',
        dataType: 'jsonp',
        data: {'action': 'get'},
        success: function(dataObj) {
            if(dataObj != ''){
                $('#jSelectRice').change(function() {
                    $("#jSelectRice option:selected").each(function () {
                        var a = $(this).val();
                        if (dataObj.rows[a]){
                            if (dataObj.rows[a].c){
                                $('#jTbShow').html('');
                                for (var b = 0; b < dataObj.rows[a].c.length; b++) {
                                    var str ='';
                                    str += '<tbody id="tys-'+dataObj.rows[a].c[b].i+'"><tr id="trs-'+dataObj.rows[a].c[b].i+'" class="">';
                                    str += '<td width="15%">'+dataObj.rows[a].c[b].n+'</td><td width="10%">'+dataObj.rows[a].c[b].i+'</td><td width="30%">'+dataObj.rows[a].c[b].m+'</td><td class="u" width="10%"><span value="'+dataObj.rows[a].c[b].u+'" name="txtNum">'+dataObj.rows[a].c[b].u+'</span><span value="'+dataObj.rows[a].c[b].p+'" name="txtPri">*'+dataObj.rows[a].c[b].p+'</span></td><td class="p" width="15%">'+dataObj.rows[a].c[b].u*dataObj.rows[a].c[b].p+'</td><td class="fn-tr" width="20%">---</td>'
                                    str += '</tr></tbody>';
                                    $('#jTbShow').append(str);
                                    GetTotalPrice();
                                }
                            } else {
                                $('#jTbShow').html('<tr class="tr-ept"><td colspan="6">暂时还没有该餐馆的订单！</td></tr>');
                            }
                        } else {

                        }
                    });
                }).change();
            } else {
                $.tips('出错了，你人品真差！');
            }
        }
    });
};
//获取总共价格
function GetTotalPrice() {
    var totalNum = 0;
    var totalSum = 0;
    var totalPer = 0;
    $("#jTbShow tr").each(function() {
        var value = parseFloat($(this).find("td:eq(4)").text());
        var totsum = parseFloat($(this).find("td:eq(3)").find('span[name="txtNum"]').text());
        totalNum += value;
        totalSum += totsum;
        totalPer = totalNum/totalSum;
        totalPer = totalPer.toFixed(2);
    });
    $("#tdTotal").html('&yen;' + totalNum);
    $("#tdTotalSum").html(totalSum+'*'+totalPer+'=');
    return totalNum;
    return totalSum;
};

getMenuData();
GetOrderData();

//保存json数据
function saveTemplate() {
    //get
    $.ajax({
        type: 'get',
        url: 'data/orz.php',
        dataType: 'jsonp',
        data: {
            'action': 'get'
        },
        success: function(dataObj) {            
            var jsonStr = '{"rows":[';
            $('#jTbOrder tbody').each(function(h){
                var z = '"';
                var id_txt = $(this).attr('id').replace('tys-','');
                jsonStr += '{"id":"'+id_txt+'","c":['
                $_tr = $(this).find('tr');
                for (var i = 0; i < $_tr.size(); i++) {
                    var _tr = $_tr.eq(i);
                    var n_txt = _tr.find('td:eq(0)').html();
                    var i_txt = _tr.find('td:eq(1)').html();
                    var m_txt = _tr.find('td:eq(2)').html();
                    var u_txt = _tr.find('td:eq(3)').find('span[name="txtNum"]').attr('value');
                    var p_txt = _tr.find('td:eq(3)').find('span[name="txtPri"]').attr('value');
                    jsonStr += "{" + z + "n" + z + ":" + z + n_txt + z + "," + z + "i" + z + ":" + z + i_txt + z + "," + z + "m" + z + ":" + z + m_txt + z + "," + z + "u" + z + ":" + z + u_txt + z + "," + z + "p" + z + ":" + z + p_txt + z + "},";
                };
                if (dataObj.rows[h]){
                    for (j=0; j<dataObj.rows[h].c.length; j++) {
                        jsonStr += "{" + z + "n" + z + ":" + z + dataObj.rows[h].c[j].n + z + "," + z + "i" + z + ":" + z + dataObj.rows[h].c[j].i + z + "," + z + "m" + z + ":" + z + dataObj.rows[h].c[j].m + z + "," + z + "u" + z + ":" + z + dataObj.rows[h].c[j].u + z + "," + z + "p" + z + ":" + z + dataObj.rows[h].c[j].p + z + "},";
                    }
                } else {
                    $.tips('出错了，你人品真差！');
                }
                jsonStr += "]},";
            });
            jsonStr = jsonStr.substring(0, jsonStr.length - 1);
            jsonStr += "]}";
            // set
            $.ajax({
                type: 'get',
                url: 'data/orz.php',
                dataType: 'jsonp',
                data: {
                    'action': 'set',
                    'json': jsonStr
                },
                success: function(data) {
                    if (data.success == '1') {
                        $.tips('您的订单已经成功受理！');
                        $('#jTbOrder tbody').html('');
                        GetOrderData();
                    } else {
                        $.tips('出错了，你人品真差！');
                    }
                }
            });
        }
    });      
};
//delay
var delay = (function() { 
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

$(function() {    
    // user
    var userList = '';
    for (var i = 0; i < user.rows.length; i++) {         
        userList +=  '<option value="'+user.rows[i].id+'">'+user.rows[i].n+'</option>';        
    };
    $('#jSelectAdmin').html(userList);
    // login
    var userName;
    $('#jLoginBtn').click(function() {
        if ($('#jLoginName').val() == '') {
            jQuery.tips('必须用真实姓名登陆，否则不予受理');
            $.cookie('l', '0');
        } else {
            userName = $('#jLoginName').val();
            $('#jBoxLogin').hide();
            $('#jBoxMenu').show();
            $('#jUserName').html(userName);
            $.cookie('l', '1');
            $.cookie('n', userName);
            $('input[name="btnSub"], input[name="btnAdd"], input[name="btnCut"], input[name="btnRemove"]').show();
        };
    });
    $('#jLogoutBtn').click(function() {
        $('#jBoxLogin').show();
        $('#jBoxMenu').hide();
        $.cookie('l', '0');
        $.cookie('n', null);
        $('input[name="btnSub"], input[name="btnAdd"], input[name="btnCut"], input[name="btnRemove"]').hide();
        return false;
    });
    if ($.cookie('l') == 1) {
        $('#jBoxLogin').hide();
        $('#jBoxMenu').show();
        $('#jUserName').html($.cookie('n'));
    } else {
        $('input[name="btnSub"], input[name="btnAdd"], input[name="btnCut"], input[name="btnRemove"]').hide();
    };
    var tempId = "";
    var num = 0;

    $('#jSelectRice').change(function() {
        //$("#jSelectMenu option:selected").each(function () {           
        var selId = $(this).val();
        $('#jSelectMenu option[value="'+selId+'"]').attr('selected','selected');
        var i = 'ty-'+selId;
        var is = 'tys-'+selId;
        $('#jTbMenu tbody').each(function(){
            if($(this).attr('id') == i){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        $('#jTbOrder tbody').each(function(){
            if($(this).attr('id') == is){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        //});
    }).change();
    // order-btn
    $("input[name='btnBuy']").live('click',function() {
        var elem = $(this).parent().parent(); //获取点击的button 的tr
        var menuId = $(elem).find("td:eq(0)").html();
        var menuName = $(elem).find("td:eq(1)").html();
        var menuPrice = $(elem).find("td:eq(2)").html();
        var menuTips = $(elem).find("td:eq(3)").html();
        var a = elem.parent().attr('id').replace('ty-','');
        if (menuId == "" || menuId == null || menuId == undefined) {
            $.tips("骚等，当前菜单不提供预订");
        } else {
            if (tempId.indexOf(menuId) != -1) {
                $.tips("已存在，右边就可以操作啦！");
            } else {
                num++;
                name = $.cookie("n");
                var str ='';
                str += '<tr id="trs-'+menuId+'" class="tr-add">';
                str += '<td width="15%">'+name+'</td><td width="10%">'+menuId+'</td><td width="30%">'+menuName+'</td><td class="u" width="10%"><span value="1" name="txtNum">1</span><span value="'+menuPrice+'" name="txtPri">*'+menuPrice+'</span></td><td class="p" width="15%">'+menuPrice+'</td><td class="fn-tr" width="20%"><input type="button" value="+" name="btnAdd"><input type="button" value="-" name="btnCut"><input type="button" value="X" name="btnRemove"></td>'
                str += '</tr>';
                $('#jTbOrder').find("tbody#tys-"+a).append(str);
                $("#jTbTotal input[name='btnSub']").removeClass('disabled').val('提交订单');
            }
            tempId += menuId + ",";
            GetTotalPrice();
        }
    });
    $("#jTbOrder input[name='txtNum']").bind("propertychange",function() {
        var value = $(this).val();
        var tr = $(this).parent().parent();
        if (value == 0) {
            $(tr).remove();
        } else {
            var price = $(tr).find("td:eq(5)").html();
            var total = value * price;
            $(tr).find("td:eq(6)").html(total.toFixed(2));
            GetTotalPrice();
        }
    });
    //加1
    $("#jTbOrder input[name='btnAdd']").live('click',function() {
        var txtBox = $(this).parent().parent().find("td:eq(3)").find("span[name='txtNum']");
        var value = $(txtBox).attr("value");
        value = +value + 1;
        $(txtBox).attr("value", value).html(value);
        var price = $(this).parent().parent().find("td:eq(3)").find("span[name='txtPri']").attr("value");
        var tatalPrice = value * price;
        $(this).parent().parent().addClass('tr-edit');
        $(this).parent().parent().find("td:eq(4)").html(tatalPrice);
        GetTotalPrice();
    });
    //减1
    $("#jTbOrder input[name='btnCut']").live('click',function() {
        var txtBox = $(this).parent().parent().find("td:eq(3)").find("span[name='txtNum']");
        var tr = $(this).parent().parent();
        var value = $(txtBox).attr("value");
        if (value > 1) {
            value = +value - 1;
            $(txtBox).attr("value", value).html(value);
            var price = $(this).parent().parent().find("td:eq(3)").find("span[name='txtPri']").attr("value");
            var tatalPrice = value * price;
            $(this).parent().parent().addClass('tr-edit');
            $(this).parent().parent().find("td:eq(4)").html(tatalPrice);
            GetTotalPrice();
        } else {
            $(tr).remove();
            GetTotalPrice();
            tempId = "";
            $("#jTbTotal input[name='btnSub']").addClass('disabled');
        }
    });
    //删除btnRemove
    $("#jTbOrder input[name='btnRemove']").live('click',function() {
        var tr = $(this).parent().parent();
        $(tr).remove();
        GetTotalPrice();
        tempId = "";
    });
    //$('#logo sup').click(function(){alert($("#jTbOrder tr").length);});
    //if ( $("#jTbOrder tr").length > 0 ){
        $("#jTbTotal input[name='btnSub']").click(function() {
            $('body,html').animate({scrollTop:0},500);
            tempId = "";
            saveTemplate();
            $(this).addClass('disabled').val('提交成功');
        });
    //}
});