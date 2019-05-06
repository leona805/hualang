var data=[];

var dataStr='1、风景画1<br>\
<br>\
出品时间 2011 <br>\
拍摄地点 中国 <br>\
拍摄日期 2011<br>\
<br>\
<br>\
2、风景画2<br>\
<br>\
出品时间 2012<br>\
拍摄地点 中国 <br>\
拍摄日期 2012<br>\
<br>\
<br>\
3、风景画3<br>\
<br>\
出品时间 2013 <br>\
拍摄地点 中国 <br>\
拍摄日期 2013<br>\
<br>\
<br>\
4、风景画4<br>\
<br>\
出品时间 2014 <br>\
拍摄地点 中国 <br>\
拍摄日期 2014<br>\
<br>\
<br>\
5、风景画5<br>\
<br>\
出品时间 2015 <br>\
拍摄地点 中国 <br>\
拍摄日期 2015<br>\
<br>\
<br>\
6、风景画6<br>\
<br>\
出品时间 2016 <br>\
拍摄地点 中国 <br>\
拍摄日期 2016<br>\
<br>\
<br>\
7、风景画7<br>\
<br>\
出品时间 2017 <br>\
拍摄地点 中国 <br>\
拍摄日期 2017<br>\
<br>\
<br>\
8、风景画8<br>\
<br>\
出品时间 2018 <br>\
拍摄地点 中国 <br>\
拍摄日期 2018<br>\
';
var d=dataStr.split('<br><br><br>')
for(var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    data.push({ 
        img:c[0].replace('、',' ')+'.jpg',
        caption:c[0].split('、')[1],
        desc :c[1]
    });
    console.log(c[0].replace('、',' ')+'.jpg');
}