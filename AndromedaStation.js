"use strict"
     
/* 
// Lesson_1
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky;
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
 
function render() {
// стили	
 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
 

// рисуем боеголовки
 	

// рисуем взрывы
  
	
// рисуем прицел		
 

// рисуем табло
 

// рисуем сигнал о нарушении защиты
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
 

// Вражеский корабль
 
// движение боеголовки
 
// защита станции	
 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 3,
		r: 0 // rotate
	};
};
  
window.onload = () => playGame();   
 */
 
 
 
/*  
// Lesson_2
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship;
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
  
function render() {
// стили	
 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
 	

// рисуем взрывы
  
	
// рисуем прицел		
  

// рисуем табло
 

// рисуем сигнал о нарушении защиты
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
 

// Вражеский корабль
        // if (fin) ship.t++;	
    // if (warhead.c >= 50) {
    // корабль идет на абордаж
	    // ship.r = 0;
        // ship.w += ship.dw;
	    // ship.h += ship.dh;
	    // ship.x = canvas.width / 2 - ship.w / 2;
	    // ship.y = canvas.height / 2 - ship.h / 2;
        // if (ship.w > 800) {
		  // shild.degree = 0;
		// }			
	// } else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	// }; 
// движение боеголовки
 
// защита станции	
 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
};
  
window.onload = () => playGame();   

 */


/*
// Lesson_3
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim;
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
 	

// рисуем взрывы
  
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
 

// рисуем сигнал о нарушении защиты
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
 

// Вражеский корабль
        // if (fin) ship.t++;	
    // if (warhead.c >= 50) {
    // корабль идет на абордаж
	    // ship.r = 0;
        // ship.w += ship.dw;
	    // ship.h += ship.dh;
	    // ship.x = canvas.width / 2 - ship.w / 2;
	    // ship.y = canvas.height / 2 - ship.h / 2;
        // if (ship.w > 800) {
		  // shild.degree = 0;
		// }			
	// } else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	// }; 
// движение боеголовки
 
// защита станции	
 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
	canvas.addEventListener('mousemove', drawAim);
};
  
window.onload = () => playGame();    
 
*/




/* 
// Lesson_4
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead;
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
  
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
 

// рисуем сигнал о нарушении защиты
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
 

// Вражеский корабль
        // if (fin) ship.t++;	
    // if (warhead.c >= 50) {
    // корабль идет на абордаж
	    // ship.r = 0;
        // ship.w += ship.dw;
	    // ship.h += ship.dh;
	    // ship.x = canvas.width / 2 - ship.w / 2;
	    // ship.y = canvas.height / 2 - ship.h / 2;
        // if (ship.w > 800) {
		  // shild.degree = 0;
		// }			
	// } else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	// }; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 5;
		warhead.dwh = 1.09;
	} else if (warhead.c > 20) {
		warhead.dxy = 7;
		warhead.dwh = 1.2;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		// shild.degree--;
		// shild.anim = shild.time;
	}
  };	
// защита станции	
 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.07,
		dxy: 3,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
	canvas.addEventListener('mousemove', drawAim);
};
  
window.onload = () => playGame();      
 */ 
 
 
 
/*  
// Lesson_5
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead;
let explosion = [];
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}   
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
 

// рисуем сигнал о нарушении защиты
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX++;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    } 

// Вражеский корабль
        // if (fin) ship.t++;	
    // if (warhead.c >= 50) {
    // корабль идет на абордаж
	    // ship.r = 0;
        // ship.w += ship.dw;
	    // ship.h += ship.dh;
	    // ship.x = canvas.width / 2 - ship.w / 2;
	    // ship.y = canvas.height / 2 - ship.h / 2;
        // if (ship.w > 800) {
		  // shild.degree = 0;
		// }			
	// } else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	// }; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 5;
		warhead.dwh = 1.09;
	} else if (warhead.c > 20) {
		warhead.dxy = 7;
		warhead.dwh = 1.2;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		// shild.degree--;
		// shild.anim = shild.time;
	} 
// защита станции	
 
  };
}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.07,
		dxy: 3,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
	canvas.addEventListener('mousemove', drawAim);
	canvas.addEventListener('click', destructionWarhead);
};
  
window.onload = () => playGame();    
  */
  

/* 
// Lesson_6
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead, shild;
let explosion = [];
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}   
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
	ctx.save();
    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 400, 50);
	ctx.restore();

	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(`Degree of Protection: ${shild.degree}`, 30, 30);
	ctx.restore();	

// рисуем сигнал о нарушении защиты
	if (shild.anim) {
		ctx.save();
		ctx.fillStyle = shild.color;
		ctx.fillRect(shild.x, shild.y, shild.w, shild.h);
		ctx.restore();
	}
} 


function update() {
// Анимация космоса
	sky.r += 0.001;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX += 0.5;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    } 

// Вражеский корабль
        // if (fin) ship.t++;	
    // if (warhead.c >= 50) {
    // корабль идет на абордаж
	    // ship.r = 0;
        // ship.w += ship.dw;
	    // ship.h += ship.dh;
	    // ship.x = canvas.width / 2 - ship.w / 2;
	    // ship.y = canvas.height / 2 - ship.h / 2;
        // if (ship.w > 800) {
		  // shild.degree = 0;
		// }			
	// } else {
	// вращение корабля в невесомости
		ship.r += 0.008; 
	// }; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 1.2; // 2 
		warhead.dwh = 1.02;  // 1.04 
	} else if (warhead.c > 20) {
		warhead.dxy = 1.05; // 3 
		warhead.dwh = 1.02;  //1.05 
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		shild.degree--;
		shild.anim = shild.time;
	} 
  };
// защита станции	
	if (shild.anim > 0) shild.anim--; // кадры анимации нарушения защиты 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 3,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.02,
		dxy: 1.02,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
		shild = {
		x: 0,
		y: 0,
		w: width,  
		h: height,
		color: 'rgba(245, 37, 37, 0.7)',
		anim: 0,
		time: 6,
		degree: 5
	};
	canvas.addEventListener('mousemove', drawAim);
	canvas.addEventListener('click', destructionWarhead);
};
  
window.onload = () => playGame();    
  */


/* 
// Lesson_7
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead, shild, fin;
let explosion = [];
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}   
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
	ctx.save();
    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 400, 50);
	ctx.restore();

	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(`Degree of Protection: ${shild.degree}`, 30, 30);
	ctx.restore();	

// рисуем сигнал о нарушении защиты
	if (shild.anim) {
		ctx.save();
		ctx.fillStyle = shild.color;
		ctx.fillRect(shild.x, shild.y, shild.w, shild.h);
		ctx.restore();
	}
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX++;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    } 

// Вражеский корабль
    // if (fin) ship.t++;	
    if (warhead.c >= 50) {
    // корабль идет на абордаж
	    ship.r = 0;
        ship.w += ship.dw;
	    ship.h += ship.dh;
	    ship.x = canvas.width / 2 - ship.w / 2;
	    ship.y = canvas.height / 2 - ship.h / 2;
        if (ship.w > 800) {
		  shild.degree = 0;
		}			
	} else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	}; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 5;
		warhead.dwh = 1.09;
	} else if (warhead.c > 20) {
		warhead.dxy = 7;
		warhead.dwh = 1.2;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		shild.degree--;
		shild.anim = shild.time;
	} 
  };
// защита станции	
	if (shild.anim > 0) shild.anim--; // кадры анимации нарушения защиты 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.07,
		dxy: 3,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
		shild = {
		x: 0,
		y: 0,
		w: width,  
		h: height,
		color: 'rgba(245, 37, 37, 0.7)',
		anim: 0,
		time: 2,
		degree: 5
	};
	canvas.addEventListener('mousemove', drawAim);
	canvas.addEventListener('click', destructionWarhead);
};
  
window.onload = () => playGame();  

 */

/* 
// Lesson_8
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead, shild, fin;
let explosion = [];
 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
};
function destructionShip() {
	if (event.clientX >= ship.x  
		&& event.clientX <= ship.x + ship.w	
	    && event.clientY >= ship.y
		&& event.clientY <= ship.y + ship.h
		&& ship.w > 400) {			
            explosion.push({
				x: ship.x + 50,
				y: ship.y,
				w: 400,
				h: 400,
				animX: 0,
				animY: 0
	        });
            ship.w = 0;	
            ship.h = 0;	
            ship.dw	= 0;
            ship.dh	= 0;
        	// fin = true;			
	}
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}   
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
	ctx.save();
    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 400, 50);
	ctx.restore();

	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(`Degree of Protection: ${shild.degree}`, 30, 30);
	ctx.restore();	

// рисуем сигнал о нарушении защиты
	if (shild.anim) {
		ctx.save();
		ctx.fillStyle = shild.color;
		ctx.fillRect(shild.x, shild.y, shild.w, shild.h);
		ctx.restore();
	}
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX++;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    } 

// Вражеский корабль
    // if (fin) ship.t++;	
    if (warhead.c >= 50) {
    // корабль идет на абордаж
	    ship.r = 0;
        ship.w += ship.dw;
	    ship.h += ship.dh;
	    ship.x = canvas.width / 2 - ship.w / 2;
	    ship.y = canvas.height / 2 - ship.h / 2;
        if (ship.w > 800) {
		  shild.degree = 0;
		}			
	} else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	}; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 5;
		warhead.dwh = 1.09;
	} else if (warhead.c > 20) {
		warhead.dxy = 7;
		warhead.dwh = 1.2;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		shild.degree--;
		shild.anim = shild.time;
	} 
  };
// защита станции	
	if (shild.anim > 0) shild.anim--; // кадры анимации нарушения защиты 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   		   
	anim = requestAnimationFrame(game);		
 

}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.07,
		dxy: 3,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
		shild = {
		x: 0,
		y: 0,
		w: width,  
		h: height,
		color: 'rgba(245, 37, 37, 0.7)',
		anim: 0,
		time: 2,
		degree: 5
	};
	canvas.addEventListener('mousemove', drawAim);
	canvas.addEventListener('click', destructionWarhead);
	canvas.addEventListener('click', destructionShip); 
};
  
window.onload = () => playGame();  
  */


/* 
// Lesson_9
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png'; 
 
let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, sky, ship, aim, warhead, shild, fin;
let explosion = [];


function victoryGame() {
	start = false;
    canvas.classList.toggle("cursorNone");
	
	ctx.save();
    ctx.fillStyle = "rgba(8, 10, 26, 1)";
	ctx.drawImage(skyImg, 0, 0); 
    ctx.strokeStyle = "rgba(227, 235, 21, 1)";
	ctx.font = "70px Arial";
	ctx.strokeText('You Win!!!', width / 2 - 130, height / 2 - 100);
	ctx.restore();

  	ctx.save();
    ctx.fillStyle = "rgba(107, 232, 49, 1)";
	ctx.font = "40px Arial";
	ctx.fillText('Play again?', width / 2 - 70, height / 2 + 100);
	ctx.restore();

};
function finishGame() {
	setTimeout(() => {
		start = false;
		canvas.classList.toggle("cursorNone");
	}, 2000);
	
	ctx.save();
    ctx.fillStyle = "black";	
	ctx.fillRect(0, 0, width, height);
	ctx.restore();

  	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText('Game Over', width / 2 - 150, height / 2 - 50);
	ctx.restore();  
	
	ctx.save();
    ctx.fillStyle = "rgba(107, 232, 49, 1)";
	ctx.font = "25px Arial";
	ctx.fillText('Play again?', width / 2 - 80, height / 2 + 100);
	ctx.restore();
}; 
function playGame() {
	start = true;
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
}; 
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
};
function destructionShip() {
	if (event.clientX >= ship.x  
		&& event.clientX <= ship.x + ship.w	
	    && event.clientY >= ship.y
		&& event.clientY <= ship.y + ship.h
		&& ship.w > 400) {			
            explosion.push({
				x: ship.x + 50,
				y: ship.y,
				w: 400,
				h: 400,
				animX: 0,
				animY: 0
	        });
            ship.w = 0;	
            ship.h = 0;	
            ship.dw	= 0;
            ship.dh	= 0;
        	fin = true;			
	}
}; 
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2; 
// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
   	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);	 	

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}   
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke(); 

// рисуем табло
	ctx.save();
    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 400, 50);
	ctx.restore();

	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(`Degree of Protection: ${shild.degree}`, 30, 30);
	ctx.restore();	

// рисуем сигнал о нарушении защиты
	if (shild.anim) {
		ctx.save();
		ctx.fillStyle = shild.color;
		ctx.fillRect(shild.x, shild.y, shild.w, shild.h);
		ctx.restore();
	}
} 


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX++;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    } 

// Вражеский корабль
    if (fin) ship.t++;	
    if (warhead.c >= 50) {
    // корабль идет на абордаж
	    ship.r = 0;
        ship.w += ship.dw;
	    ship.h += ship.dh;
	    ship.x = canvas.width / 2 - ship.w / 2;
	    ship.y = canvas.height / 2 - ship.h / 2;
        if (ship.w > 800) {
		  shild.degree = 0;
		}			
	} else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	}; 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 5;
		warhead.dwh = 1.09;
	} else if (warhead.c > 20) {
		warhead.dxy = 7;
		warhead.dwh = 1.2;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		shild.degree--;
		shild.anim = shild.time;
	} 
  };
// защита станции	
	if (shild.anim > 0) shild.anim--; // кадры анимации нарушения защиты 

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   
// защита уничтожена или корабль-враг пошел на абордаж - Game Over		
    if (shild.degree <= 0) {
        finishGame();
// корабль-враг уничтожен - Победа!		
	} else if (ship.t > 100) {
	    victoryGame();		
	} else { 		   
		anim = requestAnimationFrame(game);		
	};
}

function init() { 
	sky = {
		x: -500,
		y: -500,
		w: width * 2,  
		h: height * 2.5,
		r: 0 // rotate
	};
		ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 15.15,
		dh: 9.9,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
		aim = {
	    x: width / 2,
		y: height / 2	
	};
		warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.07,
		dxy: 3,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
		shild = {
		x: 0,
		y: 0,
		w: width,  
		h: height,
		color: 'rgba(245, 37, 37, 0.7)',
		anim: 0,
		time: 2,
		degree: 5
	};
	canvas.addEventListener('mousemove', drawAim);
	canvas.addEventListener('click', destructionWarhead);
	canvas.addEventListener('click', destructionShip); 
};
  
window.onload = () => playGame(); 
  */


 
// Lesson_10
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let skyImg = new Image();
skyImg.src = 'Images/sky.jpg';
let shipImg = new Image();
shipImg.src = 'Images/enemy.png';
let explImg = new Image();
explImg.src = 'Images/explimg.png';
let warheadImg = new Image();
warheadImg.src = 'Images/warheadImg.png';  

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;
	
let start = false;
let anim, ship, warhead, sky, aim, shild, fin;
let explosion = [];

  
// Вспомогательные функции
function startGame() {
	
	ctx.save();
    ctx.fillStyle = "rgba(8, 10, 26, 1)";
	ctx.drawImage(skyImg, 0, 0); 
    ctx.strokeStyle =  "rgba(227, 235, 21, 1)";
	ctx.font = "100px Arial";
	ctx.strokeText('Andromeda Station', width / 2 - 500, height / 2 - 100);
	ctx.restore();

  	ctx.save();
    ctx.fillStyle = "rgba(107, 232, 49, 1)";
	ctx.font = "40px Arial";
	ctx.fillText('PLAY', width / 2 - 50, height / 2 + 100);
	ctx.restore();

    canvas.onclick = () => {
	    if (!start) {		
	        playGame();
	    }
	}
};
function playGame() {
	start = true;
	canvas.classList.toggle("cursorNone");
    init(); // иннициализация переменных
    game(); // запуск анимации
};
function victoryGame() {
	start = false;
    canvas.classList.toggle("cursorNone");
	
	ctx.save();
    ctx.fillStyle = "rgba(8, 10, 26, 1)";
	ctx.drawImage(skyImg, 0, 0); 
    ctx.strokeStyle = "rgba(227, 235, 21, 1)";
	ctx.font = "70px Arial";
	ctx.strokeText('You Win!!!', width / 2 - 130, height / 2 - 100);
	ctx.restore();

  	ctx.save();
    ctx.fillStyle = "rgba(107, 232, 49, 1)";
	ctx.font = "40px Arial";
	ctx.fillText('Play again?', width / 2 - 70, height / 2 + 100);
	ctx.restore();

};
function finishGame() {
	setTimeout(() => {
		start = false;
		canvas.classList.toggle("cursorNone");
	}, 2000);
	
	ctx.save();
    ctx.fillStyle = "black";	
	ctx.fillRect(0, 0, width, height);
	ctx.restore();

  	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText('Game Over', width / 2 - 150, height / 2 - 50);
	ctx.restore();  
	
	ctx.save();
    ctx.fillStyle = "rgba(107, 232, 49, 1)";
	ctx.font = "25px Arial";
	ctx.fillText('Play again?', width / 2 - 80, height / 2 + 100);
	ctx.restore();
};
function destructionWarhead() {
// event.pageX - canvas.getBoundingClientRect().x - document.documentElement.scrollLeft
// event.pageY - canvas.getBoundingClientRect().y - document.documentElement.scrollTop
// заменим на event.clientX и event.clientY, так как в CSS у #canvas position: fixed		
 	if (event.clientX >= warhead.x  
		&& event.clientX <= warhead.x + warhead.w	
	    && event.clientY >= warhead.y
		&& event.clientY <= warhead.y + warhead.h) {
	        warhead.w = 1;
            warhead.h = 1;			
            explosion.push({
				x: warhead.x - 100,
				y: warhead.y - 100,
				w: 200,
				h: 200,
				animX: 0,
				animY: 0
	        });
            warhead.x = width / 2;	
            warhead.y = height / 2;
            warhead.i = Math.round(Math.random() * 7);
            warhead.c++;			
	}
};
function destructionShip() {
	if (event.clientX >= ship.x  
		&& event.clientX <= ship.x + ship.w	
	    && event.clientY >= ship.y
		&& event.clientY <= ship.y + ship.h
		&& ship.w > 400) {			
            explosion.push({
				x: ship.x + 50,
				y: ship.y,
				w: 400,
				h: 400,
				animX: 0,
				animY: 0
	        });
            ship.w = 0;	
            ship.h = 0;	
            ship.dw	= 0;
            ship.dh	= 0;
        	fin = true;			
	}
};
function drawAim() {
	aim.x = event.clientX;
	aim.y = event.clientY;	
};


// Основные функции
function render() {
// стили	
	ctx.fillStyle = 'rgba(219, 20, 20, 1)';	
	ctx.strokeStyle = 'rgba(219, 20, 20, 1)';
	ctx.lineWidth = 2;

// рисуем фон	
    ctx.save();	
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 1000 - sky.r);  
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(skyImg, 0, 0, 1977, 1448, sky.x, sky.y, sky.w, sky.h);  
	ctx.restore();

// рисуем вражеский корабль		
  	ctx.save();
	ctx.translate(width / 2, height / 2);
    ctx.rotate(Math.PI / 90 + ship.r);	
    ctx.translate(-width / 2, -height / 2);
	ctx.drawImage(shipImg, ship.x, ship.y, ship.w , ship.h);  
	ctx.restore();	

// рисуем боеголовки
	ctx.drawImage(warheadImg, warhead.x, warhead.y, warhead.w, warhead.h);		

// рисуем взрывы
 	for (let i = 0; i < explosion.length; i++) {
	    ctx.drawImage(
		    explImg, 128 * Math.floor(explosion[i].animX),
		    128 * Math.floor(explosion[i].animY), 128, 128,
			explosion[i].x, explosion[i].y, explosion[i].w, explosion[i].h
		);
	}  
	
// рисуем прицел		
	ctx.beginPath();
    ctx.arc(aim.x, aim.y, 2, 0, 2 * Math.PI);
    ctx.fill();

	ctx.beginPath();	
	ctx.moveTo(aim.x - 100, aim.y - 30);
	ctx.lineTo(aim.x - 100, aim.y - 50);
	ctx.lineTo(aim.x - 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y - 30);
	ctx.lineTo(aim.x + 100, aim.y - 50);
	ctx.lineTo(aim.x + 70, aim.y - 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x + 100, aim.y + 30);
	ctx.lineTo(aim.x + 100, aim.y + 50);
	ctx.lineTo(aim.x + 70, aim.y + 50);	
	ctx.stroke();	

	ctx.beginPath();	
	ctx.moveTo(aim.x - 70, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 50);
	ctx.lineTo(aim.x - 100, aim.y + 30);	
	ctx.stroke();
	
	ctx.beginPath();	
	ctx.moveTo(aim.x - 30, aim.y);
	ctx.lineTo(aim.x - 50, aim.y);
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x + 30, aim.y);
	ctx.lineTo(aim.x + 50, aim.y);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y - 30);
	ctx.lineTo(aim.x, aim.y - 50);	
	ctx.stroke();

	ctx.beginPath();	
	ctx.moveTo(aim.x, aim.y + 30);
	ctx.lineTo(aim.x, aim.y + 50);	
	ctx.stroke();

// рисуем табло
	ctx.save();
    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 400, 50);
	ctx.restore();

	ctx.save();
    ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(`Degree of Protection: ${shild.degree}`, 30, 30);
	ctx.restore();	

// рисуем сигнал о нарушении защиты
	if (shild.anim) {
		ctx.save();
		ctx.fillStyle = shild.color;
		ctx.fillRect(shild.x, shild.y, shild.w, shild.h);
		ctx.restore();
	}
}	


function update() {
// Анимация космоса
	sky.r += 0.002;
	
// Анимация взрыва
	for (let i = 0; i < explosion.length; i++) {
	    explosion[i].animX +=0.5;
	    if (explosion[i].animX > 7) {
		    explosion[i].animY++; 
			explosion[i].animX = 0;
		}
	    if (explosion[i].animY > 7) {
			explosion.splice(i, 1);
		}
    }	

// Вражеский корабль
        if (fin) ship.t++;	
    if (warhead.c >= 50) {
    // корабль идет на абордаж
	    ship.r = 0;
        ship.w += ship.dw;
	    ship.h += ship.dh;
	    ship.x = canvas.width / 2 - ship.w / 2;
	    ship.y = canvas.height / 2 - ship.h / 2;
        if (ship.w > 800) {
		  shild.degree = 0;
		}			
	} else {
	// вращение корабля в невесомости
		ship.r += 0.009; 
	};
 
// движение боеголовки
  if (warhead.c < 50) {	
    if (warhead.c > 10 && warhead.c <= 20) {
		warhead.dxy = 1.6;
		warhead.dwh = 1.03;
	} else if (warhead.c > 20) {
		warhead.dxy = 2.5;
		warhead.dwh = 1.05;
	};
  	switch (warhead.i) {
		case 0:
		    warhead.y += warhead.dxy;
			break;
		case 1:
		    warhead.y -= warhead.dxy;
			break;
		case 2:
		    warhead.x += warhead.dxy;
			break;
		case 3:
		    warhead.x -= warhead.dxy;
			break;
		case 4:
		    warhead.x -= warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 5:
		    warhead.x += warhead.dxy;
		    warhead.y -= warhead.dxy;
			break;
		case 6:
		    warhead.x += warhead.dxy;
		    warhead.y += warhead.dxy;
			break;
		case 7:
		    warhead.x -= warhead.dxy;
		    warhead.y += warhead.dxy;
			break;			
	} 
    warhead.w *= warhead.dwh;
	warhead.h *= warhead.dwh;
		
 	if (warhead.h > 100) {
		warhead.w = 1;
		warhead.h = 1;
		warhead.x = width / 2;
        warhead.y = height / 2;	
        warhead.i = Math.round(Math.random() * 7);
        warhead.c++;
		
		shild.degree--;
		shild.anim = shild.time;
	}
  } 	

// защита станции	
	if (shild.anim > 0) shild.anim--; // кадры анимации нарушения защиты

}; 


function game() {
    update(); // обновления
    render(); // отрисовка   
// защита уничтожена или корабль-враг пошел на абордаж - Game Over		
    if (shild.degree <= 0) {
        finishGame();
// корабль-враг уничтожен - Победа!		
	} else if (ship.t > 100) {
	    victoryGame();		
	} else { 		   
		anim = requestAnimationFrame(game);		
	};

}


function init() {
    fin	= false;
	sky = {
		x: -600,
		y: -600,
		w: width * 2,  
		h: height * 3,
		r: 0 // коэффициент rotate
	};
	ship = {
	    x: canvas.width / 2 - 156.5,
		y: canvas.height / 2 - 99,
		w: 313,  
		h: 198,		
		dw: 7.575, 
		dh: 4.95,
		t: 0, // таймер для выхода из игры победителем
		r: 0 // rotate
	};
	warhead = {
	    x: width / 2,
		y: height / 2,				
		w: 1,  
		h: 1,			
		dwh: 1.02,
		dxy: 1,
		i: Math.round(Math.random() * 7), // направление выстрела
		c: 0 // кол-во выстрелов
	};
	aim = {
	    x: width / 2,
		y: height / 2	
	};
	shild = {
		x: 0,
		y: 0,
		w: width,  
		h: height,
		color: 'rgba(245, 37, 37, 0.7)',
		anim: 0,
		time: 5,
		degree: 5
	};
    canvas.addEventListener('click', destructionWarhead);
    canvas.addEventListener('click', destructionShip);  
    canvas.addEventListener('mousemove', drawAim);	
};
  
window.onload = () => startGame();   