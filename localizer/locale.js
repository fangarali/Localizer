
var plural = {
        _comment: 'plural formula for different languages',
        _empty: true,
        "ach": "plural=(n > 1)",
        "af": "plural=(n != 1)",
        "ak": "plural=(n > 1)",
        "am": "plural=(n > 1)",
        "an": "plural=(n != 1)",
        "anp": "plural=(n != 1)",
        "ar": "plural=(n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5)",
        "arn": "plural=(n > 1)",
        "as": "plural=(n != 1)",
        "ast": "plural=(n != 1)",
        "ay": "plural=0",
        "az": "plural=(n != 1)",
        "be": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "bg": "plural=(n != 1)",
        "bn": "plural=(n != 1)",
        "bo": "plural=0",
        "br": "plural=(n > 1)",
        "brx": "plural=(n != 1)",
        "bs": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "ca": "plural=(n != 1)",
        "cgg": "plural=0",
        "cs": "plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",
        "csb": "plural=(n==1) ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2",
        "cy": "plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3",
        "da": "plural=(n != 1)",
        "de": "plural=(n != 1)",
        "doi": "plural=(n != 1)",
        "dz": "plural=0",
        "el": "plural=(n != 1)",
        "en": "plural=(n != 1)",
        "eo": "plural=(n != 1)",
        "es": "plural=(n != 1)",
        "es_AR": "plural=(n != 1)",
        "et": "plural=(n != 1)",
        "eu": "plural=(n != 1)",
        "fa": "plural=0",
        "ff": "plural=(n != 1)",
        "fi": "plural=(n != 1)",
        "fil": "plural=(n > 1)",
        "fo": "plural=(n != 1)",
        "fr": "plural=(n > 1)",
        "fur": "plural=(n != 1)",
        "fy": "plural=(n != 1)",
        "ga": "plural=(n==1) ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4",
        "gd": "plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3",
        "gl": "plural=(n != 1)",
        "gu": "plural=(n != 1)",
        "gun": "plural=(n > 1)",
        "ha": "plural=(n != 1)",
        "he": "plural=(n != 1)",
        "hi": "plural=(n != 1)",
        "hne": "plural=(n != 1)",
        "hy": "plural=(n != 1)",
        "hr": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "hu": "plural=(n != 1)",
        "ia": "plural=(n != 1)",
        "id": "plural=0",
        "is": "plural=(n%10!=1 || n%100==11)",
        "it": "plural=(n != 1)",
        "ja": "plural=0",
        "jbo": "plural=0",
        "jv": "plural=(n != 0)",
        "ka": "plural=0",
        "kk": "plural=0",
        "kl": "plural=(n != 1)",
        "km": "plural=0",
        "kn": "plural=(n != 1)",
        "ko": "plural=0",
        "ku": "plural=(n != 1)",
        "kw": "plural=(n==1) ? 0 : (n==2) ? 1 : (n == 3) ? 2 : 3",
        "ky": "plural=0",
        "lb": "plural=(n != 1)",
        "ln": "plural=(n > 1)",
        "lo": "plural=0",
        "lt": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "lv": "plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2)",
        "mai": "plural=(n != 1)",
        "mfe": "plural=(n > 1)",
        "mg": "plural=(n > 1)",
        "mi": "plural=(n > 1)",
        "mk": "plural= n==1 || n%10==1 ? 0 : 1",
        "ml": "plural=(n != 1)",
        "mn": "plural=(n != 1)",
        "mni": "plural=(n != 1)",
        "mnk": "plural=(n==0 ? 0 : n==1 ? 1 : 2)",
        "mr": "plural=(n != 1)",
        "ms": "plural=0",
        "mt": "plural=(n==1 ? 0 : n==0 || ( n%100>1 && n%100<11) ? 1 : (n%100>10 && n%100<20 ) ? 2 : 3)",
        "my": "plural=0",
        "nah": "plural=(n != 1)",
        "nap": "plural=(n != 1)",
        "nb": "plural=(n != 1)",
        "ne": "plural=(n != 1)",
        "nl": "plural=(n != 1)",
        "se": "plural=(n != 1)",
        "nn": "plural=(n != 1)",
        "no": "plural=(n != 1)",
        "nso": "plural=(n != 1)",
        "oc": "plural=(n > 1)",
        "or": "plural=(n != 1)",
        "ps": "plural=(n != 1)",
        "pa": "plural=(n != 1)",
        "pap": "plural=(n != 1)",
        "pl": "plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "pms": "plural=(n != 1)",
        "pt": "plural=(n != 1)",
        "pt_BR": "plural=(n > 1)",
        "rm": "plural=(n != 1)",
        "ro": "plural=(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)",
        "ru": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "rw": "plural=(n != 1)",
        "sah": "plural=0",
        "sat": "plural=(n != 1)",
        "sco": "plural=(n != 1)",
        "sd": "plural=(n != 1)",
        "si": "plural=(n != 1)",
        "sk": "plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",
        "sl": "plural=(n%100==1 ? 1 : n%100==2 ? 2 : n%100==3 || n%100==4 ? 3 : 0)",
        "so": "plural=(n != 1)",
        "son": "plural=(n != 1)",
        "sq": "plural=(n != 1)",
        "sr": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "su": "plural=0",
        "sw": "plural=(n != 1)",
        "sv": "plural=(n != 1)",
        "ta": "plural=(n != 1)",
        "te": "plural=(n != 1)",
        "tg": "plural=(n > 1)",
        "ti": "plural=(n > 1)",
        "th": "plural=0",
        "tk": "plural=(n != 1)",
        "tr": "plural=(n > 1)",
        "tt": "plural=0",
        "ug": "plural=0",
        "uk": "plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)",
        "ur": "plural=(n != 1)",
        "uz": "plural=(n > 1)",
        "vi": "plural=0",
        "wa": "plural=(n > 1)",
        "wo": "plural=0",
        "yo": "plural=(n != 1)",
        "zh": "plural=(n > 1)"
    };
var locale = {
    'login': {
        'dialog': {
            _comment: 'main login dialog section',
            _translated: false,
            en: 'the dialog',
            ru: 'Диялог',
            ha: {
                'en': '{{../}}'
            },
            'label': {
                en: 'Enter your {{lower:login.dialog.login}} and {{lower:password}},  {{username}}',
                ru: '{{lower:33}}'
            },
            'login': {
                en: 'Login',
                ru: 'Логин'
            },
            'password': {
                en: 'Password',
                ru: 'Пароль'
            },
            'error': {
                ru: 'Вы ввели {{count}} {{password}} {{plural:1,1,2,5}} {{plural:count,lower:password,пароля,паролей}}'
            }
        }
    }
};
var resolveVar = function( varName, path, locale ){
    var up = 1,
        data, i;
        
    while(varName.substr(0,3)==='../'){
        varName = varName.substr(3);
        up++;
    }
    // special case for just upper node "../"
    up -= !varName;
    
    data = locale[varName] || (up && 
        locale[path.replace(new RegExp('(\\.[^\\.]*){'+up+'}$'), varName ? '.'+varName: '')]);
    return data === void 0 ? false : data;
};
var modifiers = {
    plural: function(varName, path, locale){
        var fullResolve = false;
        var token = varName.split(',').map(function(el){
            var result = resolve(el, path, locale);
            fullResolve = fullResolve && result !== false;
            return result || el;
        });
        return wrap(token.join(','));
    }
};
var singleVar = {
    lower: function(text){
        return text.toLowerCase();
    },
    upper: function(text){
        return text.toUpperCase();
    },
    capitalize: function(text){
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    }
}, i, singleFactory = function(name){
    return function(varName, path, locale){
        var result = resolveVar(varName, path, locale);
        return result === false ? false : singleVar[name](result+'');
    }
}
;
for( i in singleVar ) if( singleVar.hasOwnProperty(i) ){
    modifiers[ i ] = singleFactory(i);
}

var system = {_comment: 1, _translated: 1},
    symbol = /[^a-z_0-9\.\\]/,
    wrap = function(text){
        return '{{'+text+'}}'
    },
    resolve = function(part, path, locale){
        var token = part.split(':'),
            modifier = token.length > 1 && modifiers[token[0]],
            result;
        if( modifier ){
            result = modifier(token.slice(1).join(':'), path, locale);
        }else{
            result = resolveVar( part, path, locale );
        }
        return result;
    };
var resolveDependances = function(locale){
    var i;
    for( i in locale )
        if( locale.hasOwnProperty(i) ){
            locale[i] = locale[i].replace(/\{\{([^\}\{]*?)\}\}/g, function(full, part){
                return resolve(part, i, locale) || full;
            });
        }
};
var generate = function( locale, lang, prefix, out ){
    prefix = prefix || '';
    var i, val, key, res, j;
    out = out || {};
    for( i in locale )
        if( locale.hasOwnProperty(i) ){
            val = locale[i];
            
            if(typeof val === 'string'){
                if( !(i in system) && i === lang )
                    out[prefix] = val;
            }else{
                key = prefix ? prefix + '.'+ i : i;
                res = generate(val, lang, key, out);
            }
        }
    if( !prefix ){
        resolveDependances(out);
        out._plural = plural[lang];
    }
    return out;
};



generate(locale, 'ru');