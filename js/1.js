
//3通用函数
function g(selector) {
    var method = selector.substr(0, 1) == '.' ?
        'getElementsByClassName' : 'getElementById';
    return document[method](selector.substr(1));
}
//6随机生成一个值,支持取值范围。random([min,max])
function random(range) {
    var max = Math.max(range[0], range[1]);
    var min = Math.min(range[0], range[1]);
    var diff = max - min;
    var number = Math.ceil((Math.random() * diff + min));
    return number;
}


//4输出所有的海报
var data = data;
window.onload = function addPhotos() {

    var template = g('#wrap').innerHTML;
    var html = [];
    var nav = [];

    // 输出控制按钮，每一个控制按钮，都对一个一个海报
    for (s in data) {
        alert(data);
        var _html = template
            .replace('{{index}}', s)
            .replace('{{img}}', data[s].img)
            .replace('{{caption}}', data[s].caption)
            .replace('{{desc}}', data[s].desc);
        html.push(_html);

        nav.push('<span id="nav-' +s+ '" onclick="turn( g(\'#photo-' +s+ '\') )" class="i">&nbsp;</span>');
    }
    html.push('<div class="nav">' +nav.join('')+ '</div>');

    g('#wrap').innerHTML = html.join('');
    rsort(random([0, data.length]));
}

//7计算左右分区的范围
function range() {
    var range = { left: { x: [], y: [] }, right: { x: [], y: [] } };

    var wrap = {
        w: g('#wrap').clientWidth,
        h: g('#wrap').clientHeight
    }
    var photo = {
        w: g('.photo')[0].clientWidth,
        h: g('.photo')[0].clientHeight
    }

    range.wrap = wrap;
    range.photo = photo;

    range.left.x = [0 - photo.w, wrap.w / 2 - photo.w / 2];
    range.left.y = [0 - photo.w, wrap.h];

    range.right.x = [wrap.w / 2 + photo.w / 2, wrap.w + photo.w];
    range.right.y = [0 - photo.w, wrap.h];

    return range;
}

//5排序海报
function rsort(n) {

    var _photo = g('.photo');
    var photos = [];

    for (s = 0; s < _photo.length; s++) {

        _photo[s].className = _photo[s].className.replace(/\s*photo-center\s*/, ' ');
        _photo[s].className = _photo[s].className.replace(/\s*photo-front\s*/, ' ');
        _photo[s].className = _photo[s].className.replace(/\s*photo-back\s*/, ' ');

        _photo[s].className += ' photo-front ';

        _photo[s].style.left='';
        _photo[s].style.top='';
        _photo[s].style['-webkit-transform']='rotate(0deg) scale(1.3)';

        photos.push(_photo[s]);
    }

    var photo_center = g('#photo-' + n);
    photo_center.className += ' photo-center';
    photo_center = photos.splice(n, 1)[0];

    //把海报分为左、右区域两个部分
    var photos_left = photos.splice(0, Math.ceil(photos.length / 2))

    var photos_right = photos;

    var ranges = range();

    for (s in photos_left) {
        var photo = photos_left[s];

        photo.style.left = random(ranges.left.x) + 'px';
        photo.style.top = random(ranges.left.y) + 'px';
        photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    }
    for (s in photos_right) {
        var photo = photos_right[s];

        photo.style.left = random(ranges.right.x) + 'px';
        photo.style.top = random(ranges.right.y) + 'px';
        photo.style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    }


    //控制按钮处理
    var navs = g('.i');
    for (var s = 0; s < navs.length; s++) {
        navs[s].className = navs[s].className.replace(/\s*i-current\s*/, ' ');
        navs[s].className = navs[s].className.replace(/\s*i-back\s*/, ' ');
    }
    g('#nav-' +n).className += ' i-current ';

    
}
//1 翻面控制
function turn (elem) {
    var cls = elem.className;
    var n = elem.id.split('-')[1];
    
    if( !/photo-center/.test(cls) ){
        return rsort(n);
    }
    if (/photo-front/.test(cls)) {
        cls = cls.replace(/photo-front/, 'photo-back')
        g('#nav-'+n).className += 'i-back';
    }
    else {
        cls = cls.replace(/photo-back/, 'photo-front')
        g('#nav-'+n).className = g('#nav-'+n).className.replace(/\s*i-back\s*/,' ');
    }
    return elem.className = cls;
} 