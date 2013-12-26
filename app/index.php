<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
<title>JiaMi?</title>
<link rel="stylesheet" href="../theme/css/global.css" type="text/css">
<link rel="stylesheet" href="../theme/css/order.css" type="text/css">
</head>

<body id="home">
<div id="header">
    <?php include("include/header.php"); ?>
</div>
<div id="container">
    <div id="content" class="fn-clearfix bgy">
        <div id="side">
            <div class="box box-login" id="jBoxLogin">
                <div class="hd">
                    <h2>登陆以后开始订餐</h2>
                </div>
                <div class="form-login fn-clearfix" id="jLogin">
                    <input type="text" class="text" id="jLoginName" placeholder="请输入姓名" required="required" />
                    <input type="button" class="btn btn-large" id="jLoginBtn" value="Login" />
                </div>
                <div class="note">
                    <ul class="list-log">
                        <li>订单11:00截止，请提前预订；</li>
                        <li>必须用真实姓名登陆预订，否则不予受理；</li>
                        <li>欢迎各位提交新餐馆；</li>
                        <li>2012-09-29 新增多餐馆（港饮港食/十八碗/串门子/韩堂春/荷香笼仔饭）；</li>
                        <li>2012-11-08 (v1.2) 优化提交订单功能（重复提交误操作）;</li>
                    </ul>
                    <!--<h3>本日前三名高富帅</h3>
                    <ul class="list-top" id="jListTop">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>-->
                </div>
            </div>
            <div class="box box-menu fn-hide" id="jBoxMenu">
                <div class="hd">
                    <div class="more"><b id="jUserName">姓名</b> - <a id="jLogoutBtn" href="javascript:void(0);">退出</a></div>
                    <h2>请选择菜单</h2>
                </div>
                <div class="list-menu">
                    <select class="select" id="jSelectMenu" name="jSelectMenu" disabled="disabled"></select>
                    <table class="tb-nor">
                        <thead>
                            <tr>
                                <th width="10%">ID</th>
                                <th width="40%">菜名</th>
                                <th width="20%">价格</th>
                                <th width="20%">推荐</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                    </table>
                    <table class="tb-nor" id="jTbMenu"></table>
                </div>
            </div>
        </div>
        <div id="list">
            <div class="box box-rice">
                <div class="hd">
                    <div class="more">今日订餐员：<b class="ui-c-red" id="jUserAdmin"></b></div>
                    <h2>完成的订单列表</h2>
                </div>
                <div class="list-rice">
                    <select class="select" id="jSelectRice" name="jSelectRice"></select>
                    <table class="tb-nor">
                        <thead>
                            <tr>
                                <th width="15%">姓名</th>
                                <th width="10%">ID</th>
                                <th width="30%">菜名</th>                                
                                <th width="10%">数量</th>
                                <th width="15%">总价</th>
                                <th width="20%"></th>
                            </tr>
                        </thead>
                    </table>
                    <table class="tb-nor" id="jTbShow"></table>
                    <table class="tb-nor" id="jTbTotal">
                        <tfoot>
                            <tr> 
                                <th width="30%"><!--small>此餐馆订单总计：</small--></th>                         
                                <th width="35%" class="fn-tr" id="tdTotalSum"></th>
                                <th width="15%" id="tdTotal" class="ui-c-red"></th>
                                <th width="20%" class="fn-tr"><input type="button" name="btnSub" value="提交订单" class="disabled" /></th>
                            </tr>
                        </tfoot>
                    </table>
                    <table class="tb-nor" id="jTbOrder"></table>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer">
    <?php include("include/footer.php"); ?>
</div>
</body>
</html>
