var str = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
           'o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H',
           'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    canvas = document.getElementById('canvas'),
    refresh = document.getElementById('refresh'),
    submit = document.getElementById('submit'),
    inputval = document.getElementById('inputval'),
    username = document.getElementById('username'),
    password = document.getElementById('password'),
    msg = document.getElementById('msg'),
    //x = canvas.width/2,
    cxt = canvas.getContext('2d'),
    oImg = new Image(),
    vercode = '';


    createVerCode();
    //加载背景图片+写入验证码
    function createVerCode(){
    	vercode = '';//初始化
    	oImg.src = 'bg.png';
    	oImg.onload = function(){
    		//背景
	    	var pat = cxt.createPattern(this,'no-repeat');
	    	cxt.fillStyle = pat;
	    	cxt.fillRect(0,0,canvas.width,canvas.height);
	    	//描绘验证码
	    	//cxt.textAlign = 'center';
	    	for(var i=0;i<5;i++){//描绘5位验证码
	    		var s = Math.floor(Math.random()*9+15);
	    		cxt.font = s+'px Georgia';
	    		cxt.fillStyle = '#FFF';
	    		var a = Math.random()/10;
	    		var b = Math.random()/10;
	    		var c = Math.random();
	    		cxt.setTransform(1,-a,b,1,1,c*5);//这些数自己调
	    		code = str[Math.floor(Math.random()*str.length)];
	    		cxt.fillText(code,15+i*24,30);
	    		vercode += code;
	    	}
	    	

	    }
    }
    //刷新验证码
    refresh.onclick = function(){
        createVerCode();
    }
    //提交表单==检验验证码
    submit.onclick = function(){
        msg.innerHTML = '';
    	var val = inputval.value;
        var usn = username.value;
        var psw = password.value;
        if(usn==""){
            msg.innerHTML = '请输入账号';
            username.focus();
            return;
        }
        if(psw==""){
            msg.innerHTML = '请输入密码';
            password.focus();
            return;
        }
        if(val==""){
            msg.innerHTML = '请输入验证码';
            inputval.focus();
            return;
        }
    	if(val!=vercode){
            msg.innerHTML = '验证码不正确';
    		return;
    	}
        msg.innerHTML = '';
        this.innerHTML = '正在登录..';
        this.setAttribute('disabled',true);
    }


