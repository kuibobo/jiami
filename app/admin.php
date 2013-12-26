<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9" />
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"/>
<title>JiaMi?</title>
<link rel="stylesheet" href="../theme/css/global.css" type="text/css">
<link rel="stylesheet" href="../theme/css/order.css" type="text/css">
</head>

<body id="admin">
<div id="header">
    <?php include("include/header.php"); ?>
</div>
<div id="container">
    <div id="content" class="fn-clearfix bgy">
        <div id="side">
            <div class="box box-set">
                <div class="hd">
                    <h3>常规设置：</h3>
                </div>
                <div class="bd">
                    <ul class="list-form">
                        <li>
                            <label>今日订餐员：</label>
                            <select class="select" name="jSelectAdmin" id="jSelectAdmin"></select>
                        </li>
                        <li>
                            <label>今日默认餐馆：</label>
                            <select class="select" name="jSelectMenu" id="jSelectMenu"></select>
                        </li>
                        <li>
                            <label>订餐截止时间：</label>
                            <select class="select" name="jSelectAdmin" id="jSelectTime">
                                <option value="10">10:00 (am)</option>
                                <option selected="selected" value="11">11:00 (am)</option>
                                <option value="12">12:00 (am)</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <div class="fd">
                    <input class="btn" type="button" name="btnSet" value="Submit" />
                </div>
            </div>
        </div>        
        <div id="list">
            <div class="box box-add">
                <div class="hd">
                    <h3>餐馆添加/修改：</h3>
                </div>
                <div class="bd">
                    <ul class="list-form list-form-add">
                        <li>
                            <label>餐馆名称：</label>
                            <input type="text" class="text" />
                        </li>
                        <li>
                            <label>餐馆地址：</label>
                            <input type="text" class="text" />
                        </li>
                        <li>
                            <label>订餐电话：</label>
                            <input type="text" class="text" />
                        </li>
                    </ul>
                    <ul class="list-form list-form-add">
                        <li>
                            <label>菜名：</label>
                            <input type="text" class="text" />
                        </li>
                        <li>
                            <label>价格：</label>
                            <input type="text" class="text" />
                        </li>
                        <li>
                            <label>推荐：</label>
                            <input type="text" class="text" />
                        </li>
                    </ul>
                </div>
                <div class="fd">
                    <input class="btn" type="button" name="btnAdds" value="Submit" />
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
