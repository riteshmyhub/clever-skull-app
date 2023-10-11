"use client";
import React from "react";

export default function ShapeParticle() {
   return (
      <div>
         <style jsx>{`
            [data-particle],
            [data-particle]::before,
            [data-particle]::after {
               content: "";
               position: fixed;
               top: 0;
               left: 0;
               opacity: 0.9;
               transform-origin: top;
               transition: all 5s linear 0s;
            }
            .purple {
               -webkit-animation: purple linear 30s alternate infinite;
               animation: purple linear 30s alternate infinite;
               border: 2px solid #241379;
               border-radius: 100%;
               width: 40px;
               height: 40px;
               transform: translate3d(64vw, 63vh, 0);
               z-index: 5;
            }
            .purple::before {
               -webkit-animation: purple-pseudo linear 15s alternate infinite;
               animation: purple-pseudo linear 15s alternate infinite;
               background: #241379;
               border: 2px solid #241379;
               width: 27px;
               height: 44px;
               transform: translate3d(22vw, -46vh, 0) rotate(274deg);
            }
            .purple::after {
               -webkit-animation: purple-pseudo linear 20s alternate infinite;
               animation: purple-pseudo linear 20s alternate infinite;
               border: 2px solid #241379;
               width: 20px;
               height: 20px;
               transform: translate3d(-28vw, -17vh, 0) rotate(214deg);
            }
            @-webkit-keyframes purple {
               50% {
                  transform: translate3d(12vw, 8vh, 0);
               }
               100% {
                  transform: translate3d(65vw, 20vh, 0);
               }
            }
            @keyframes purple {
               50% {
                  transform: translate3d(12vw, 8vh, 0);
               }
               100% {
                  transform: translate3d(65vw, 20vh, 0);
               }
            }
            @-webkit-keyframes purple-pseudo {
               33% {
                  transform: translate3d(45vw, 15vh, 0) rotate(134deg);
               }
               100% {
                  transform: translate3d(-21vw, 1vh, 0) rotate(158deg);
               }
            }
            @keyframes purple-pseudo {
               33% {
                  transform: translate3d(45vw, 15vh, 0) rotate(134deg);
               }
               100% {
                  transform: translate3d(-21vw, 1vh, 0) rotate(158deg);
               }
            }
            .medium-blue {
               -webkit-animation: medium-blue linear 30s alternate infinite;
               animation: medium-blue linear 30s alternate infinite;
               border: 2px solid #2185bf;
               border-radius: 100%;
               width: 21px;
               height: 21px;
               transform: translate3d(55vw, 44vh, 0);
               z-index: 9;
            }
            .medium-blue::before {
               -webkit-animation: medium-blue-pseudo linear 15s alternate infinite;
               animation: medium-blue-pseudo linear 15s alternate infinite;
               background: #2185bf;
               border: 2px solid #2185bf;
               width: 40px;
               height: 11px;
               transform: translate3d(10vw, -8vh, 0) rotate(29deg);
            }
            .medium-blue::after {
               -webkit-animation: medium-blue-pseudo linear 20s alternate infinite;
               animation: medium-blue-pseudo linear 20s alternate infinite;
               border: 2px solid #2185bf;
               width: 23px;
               height: 8px;
               transform: translate3d(-42vw, 55vh, 0) rotate(151deg);
            }
            @-webkit-keyframes medium-blue {
               50% {
                  transform: translate3d(32vw, 95vh, 0);
               }
               100% {
                  transform: translate3d(28vw, 13vh, 0);
               }
            }
            @keyframes medium-blue {
               50% {
                  transform: translate3d(32vw, 95vh, 0);
               }
               100% {
                  transform: translate3d(28vw, 13vh, 0);
               }
            }
            @-webkit-keyframes medium-blue-pseudo {
               33% {
                  transform: translate3d(-6vw, -35vh, 0) rotate(69deg);
               }
               100% {
                  transform: translate3d(30vw, 49vh, 0) rotate(109deg);
               }
            }
            @keyframes medium-blue-pseudo {
               33% {
                  transform: translate3d(-6vw, -35vh, 0) rotate(69deg);
               }
               100% {
                  transform: translate3d(30vw, 49vh, 0) rotate(109deg);
               }
            }
            .light-blue {
               -webkit-animation: light-blue linear 30s alternate infinite;
               animation: light-blue linear 30s alternate infinite;
               border: 2px solid #1fbce1;
               border-radius: 100%;
               width: 13px;
               height: 13px;
               transform: translate3d(26vw, 65vh, 0);
               z-index: 7;
            }
            .light-blue::before {
               -webkit-animation: light-blue-pseudo linear 15s alternate infinite;
               animation: light-blue-pseudo linear 15s alternate infinite;
               background: #1fbce1;
               border: 2px solid #1fbce1;
               width: 41px;
               height: 27px;
               transform: translate3d(24vw, -52vh, 0) rotate(133deg);
            }
            .light-blue::after {
               -webkit-animation: light-blue-pseudo linear 20s alternate infinite;
               animation: light-blue-pseudo linear 20s alternate infinite;
               border: 2px solid #1fbce1;
               width: 34px;
               height: 18px;
               transform: translate3d(1vw, -31vh, 0) rotate(3deg);
            }
            @-webkit-keyframes light-blue {
               50% {
                  transform: translate3d(70vw, 42vh, 0);
               }
               100% {
                  transform: translate3d(67vw, 17vh, 0);
               }
            }
            @keyframes light-blue {
               50% {
                  transform: translate3d(70vw, 42vh, 0);
               }
               100% {
                  transform: translate3d(67vw, 17vh, 0);
               }
            }
            @-webkit-keyframes light-blue-pseudo {
               33% {
                  transform: translate3d(-48vw, -12vh, 0) rotate(11deg);
               }
               100% {
                  transform: translate3d(-25vw, 27vh, 0) rotate(293deg);
               }
            }
            @keyframes light-blue-pseudo {
               33% {
                  transform: translate3d(-48vw, -12vh, 0) rotate(11deg);
               }
               100% {
                  transform: translate3d(-25vw, 27vh, 0) rotate(293deg);
               }
            }
            .red {
               -webkit-animation: red linear 30s alternate infinite;
               animation: red linear 30s alternate infinite;
               border: 2px solid #b62f56;
               border-radius: 100%;
               width: 23px;
               height: 23px;
               transform: translate3d(29vw, 19vh, 0);
               z-index: 12;
            }
            .red::before {
               -webkit-animation: red-pseudo linear 15s alternate infinite;
               animation: red-pseudo linear 15s alternate infinite;
               background: #b62f56;
               border: 2px solid #b62f56;
               width: 32px;
               height: 6px;
               transform: translate3d(54vw, 68vh, 0) rotate(206deg);
            }
            .red::after {
               -webkit-animation: red-pseudo linear 20s alternate infinite;
               animation: red-pseudo linear 20s alternate infinite;
               border: 2px solid #b62f56;
               width: 36px;
               height: 21px;
               transform: translate3d(2vw, 1vh, 0) rotate(205deg);
            }
            @-webkit-keyframes red {
               50% {
                  transform: translate3d(55vw, 18vh, 0);
               }
               100% {
                  transform: translate3d(55vw, 90vh, 0);
               }
            }
            @keyframes red {
               50% {
                  transform: translate3d(55vw, 18vh, 0);
               }
               100% {
                  transform: translate3d(55vw, 90vh, 0);
               }
            }
            @-webkit-keyframes red-pseudo {
               33% {
                  transform: translate3d(14vw, -15vh, 0) rotate(18deg);
               }
               100% {
                  transform: translate3d(43vw, 8vh, 0) rotate(354deg);
               }
            }
            @keyframes red-pseudo {
               33% {
                  transform: translate3d(14vw, -15vh, 0) rotate(18deg);
               }
               100% {
                  transform: translate3d(43vw, 8vh, 0) rotate(354deg);
               }
            }
            .orange {
               -webkit-animation: orange linear 30s alternate infinite;
               animation: orange linear 30s alternate infinite;
               border: 2px solid #d5764c;
               border-radius: 100%;
               width: 45px;
               height: 45px;
               transform: translate3d(17vw, 13vh, 0);
               z-index: 10;
            }
            .orange::before {
               -webkit-animation: orange-pseudo linear 15s alternate infinite;
               animation: orange-pseudo linear 15s alternate infinite;
               background: #d5764c;
               border: 2px solid #d5764c;
               width: 35px;
               height: 6px;
               transform: translate3d(26vw, 68vh, 0) rotate(85deg);
            }
            .orange::after {
               -webkit-animation: orange-pseudo linear 20s alternate infinite;
               animation: orange-pseudo linear 20s alternate infinite;
               border: 2px solid #d5764c;
               width: 15px;
               height: 22px;
               transform: translate3d(19vw, -4vh, 0) rotate(112deg);
            }
            @-webkit-keyframes orange {
               50% {
                  transform: translate3d(52vw, 64vh, 0);
               }
               100% {
                  transform: translate3d(39vw, 39vh, 0);
               }
            }
            @keyframes orange {
               50% {
                  transform: translate3d(52vw, 64vh, 0);
               }
               100% {
                  transform: translate3d(39vw, 39vh, 0);
               }
            }
            @-webkit-keyframes orange-pseudo {
               33% {
                  transform: translate3d(-16vw, -30vh, 0) rotate(308deg);
               }
               100% {
                  transform: translate3d(-34vw, 29vh, 0) rotate(240deg);
               }
            }
            @keyframes orange-pseudo {
               33% {
                  transform: translate3d(-16vw, -30vh, 0) rotate(308deg);
               }
               100% {
                  transform: translate3d(-34vw, 29vh, 0) rotate(240deg);
               }
            }
            .yellow {
               -webkit-animation: yellow linear 30s alternate infinite;
               animation: yellow linear 30s alternate infinite;
               border: 2px solid #ffd53e;
               border-radius: 100%;
               width: 27px;
               height: 27px;
               transform: translate3d(7vw, 99vh, 0);
               z-index: 12;
            }
            .yellow::before {
               -webkit-animation: yellow-pseudo linear 15s alternate infinite;
               animation: yellow-pseudo linear 15s alternate infinite;
               background: #ffd53e;
               border: 2px solid #ffd53e;
               width: 19px;
               height: 9px;
               transform: translate3d(50vw, -71vh, 0) rotate(105deg);
            }
            .yellow::after {
               -webkit-animation: yellow-pseudo linear 20s alternate infinite;
               animation: yellow-pseudo linear 20s alternate infinite;
               border: 2px solid #ffd53e;
               width: 32px;
               height: 44px;
               transform: translate3d(82vw, -62vh, 0) rotate(30deg);
            }
            @-webkit-keyframes yellow {
               50% {
                  transform: translate3d(98vw, 82vh, 0);
               }
               100% {
                  transform: translate3d(92vw, 83vh, 0);
               }
            }
            @keyframes yellow {
               50% {
                  transform: translate3d(98vw, 82vh, 0);
               }
               100% {
                  transform: translate3d(92vw, 83vh, 0);
               }
            }
            @-webkit-keyframes yellow-pseudo {
               33% {
                  transform: translate3d(-56vw, -37vh, 0) rotate(353deg);
               }
               100% {
                  transform: translate3d(-37vw, -66vh, 0) rotate(261deg);
               }
            }
            @keyframes yellow-pseudo {
               33% {
                  transform: translate3d(-56vw, -37vh, 0) rotate(353deg);
               }
               100% {
                  transform: translate3d(-37vw, -66vh, 0) rotate(261deg);
               }
            }
            .cyan {
               -webkit-animation: cyan linear 30s alternate infinite;
               animation: cyan linear 30s alternate infinite;
               border: 2px solid #78ffba;
               border-radius: 100%;
               width: 44px;
               height: 44px;
               transform: translate3d(27vw, 84vh, 0);
               z-index: 4;
            }
            .cyan::before {
               -webkit-animation: cyan-pseudo linear 15s alternate infinite;
               animation: cyan-pseudo linear 15s alternate infinite;
               background: #78ffba;
               border: 2px solid #78ffba;
               width: 48px;
               height: 30px;
               transform: translate3d(61vw, -8vh, 0) rotate(339deg);
            }
            .cyan::after {
               -webkit-animation: cyan-pseudo linear 20s alternate infinite;
               animation: cyan-pseudo linear 20s alternate infinite;
               border: 2px solid #78ffba;
               width: 19px;
               height: 17px;
               transform: translate3d(-27vw, -5vh, 0) rotate(302deg);
            }
            @-webkit-keyframes cyan {
               50% {
                  transform: translate3d(95vw, 62vh, 0);
               }
               100% {
                  transform: translate3d(94vw, 27vh, 0);
               }
            }
            @keyframes cyan {
               50% {
                  transform: translate3d(95vw, 62vh, 0);
               }
               100% {
                  transform: translate3d(94vw, 27vh, 0);
               }
            }
            @-webkit-keyframes cyan-pseudo {
               33% {
                  transform: translate3d(-47vw, 1vh, 0) rotate(46deg);
               }
               100% {
                  transform: translate3d(-12vw, 13vh, 0) rotate(43deg);
               }
            }
            @keyframes cyan-pseudo {
               33% {
                  transform: translate3d(-47vw, 1vh, 0) rotate(46deg);
               }
               100% {
                  transform: translate3d(-12vw, 13vh, 0) rotate(43deg);
               }
            }
            .light-green {
               -webkit-animation: light-green linear 30s alternate infinite;
               animation: light-green linear 30s alternate infinite;
               border: 2px solid #98fd85;
               border-radius: 100%;
               width: 32px;
               height: 32px;
               transform: translate3d(73vw, 58vh, 0);
               z-index: 2;
            }
            .light-green::before {
               -webkit-animation: light-green-pseudo linear 15s alternate infinite;
               animation: light-green-pseudo linear 15s alternate infinite;
               background: #98fd85;
               border: 2px solid #98fd85;
               width: 34px;
               height: 18px;
               transform: translate3d(-66vw, -2vh, 0) rotate(309deg);
            }
            .light-green::after {
               -webkit-animation: light-green-pseudo linear 20s alternate infinite;
               animation: light-green-pseudo linear 20s alternate infinite;
               border: 2px solid #98fd85;
               width: 36px;
               height: 11px;
               transform: translate3d(-71vw, 35vh, 0) rotate(222deg);
            }
            @-webkit-keyframes light-green {
               50% {
                  transform: translate3d(59vw, 9vh, 0);
               }
               100% {
                  transform: translate3d(60vw, 39vh, 0);
               }
            }
            @keyframes light-green {
               50% {
                  transform: translate3d(59vw, 9vh, 0);
               }
               100% {
                  transform: translate3d(60vw, 39vh, 0);
               }
            }
            @-webkit-keyframes light-green-pseudo {
               33% {
                  transform: translate3d(-30vw, 16vh, 0) rotate(231deg);
               }
               100% {
                  transform: translate3d(20vw, 33vh, 0) rotate(250deg);
               }
            }
            @keyframes light-green-pseudo {
               33% {
                  transform: translate3d(-30vw, 16vh, 0) rotate(231deg);
               }
               100% {
                  transform: translate3d(20vw, 33vh, 0) rotate(250deg);
               }
            }
            .lime {
               -webkit-animation: lime linear 30s alternate infinite;
               animation: lime linear 30s alternate infinite;
               border: 2px solid #befb46;
               border-radius: 100%;
               width: 15px;
               height: 15px;
               transform: translate3d(60vw, 87vh, 0);
               z-index: 8;
            }
            .lime::before {
               -webkit-animation: lime-pseudo linear 15s alternate infinite;
               animation: lime-pseudo linear 15s alternate infinite;
               background: #befb46;
               border: 2px solid #befb46;
               width: 5px;
               height: 31px;
               transform: translate3d(-33vw, -42vh, 0) rotate(87deg);
            }
            .lime::after {
               -webkit-animation: lime-pseudo linear 20s alternate infinite;
               animation: lime-pseudo linear 20s alternate infinite;
               border: 2px solid #befb46;
               width: 12px;
               height: 47px;
               transform: translate3d(-23vw, -4vh, 0) rotate(95deg);
            }
            @-webkit-keyframes lime {
               50% {
                  transform: translate3d(16vw, 16vh, 0);
               }
               100% {
                  transform: translate3d(98vw, 69vh, 0);
               }
            }
            @keyframes lime {
               50% {
                  transform: translate3d(16vw, 16vh, 0);
               }
               100% {
                  transform: translate3d(98vw, 69vh, 0);
               }
            }
            @-webkit-keyframes lime-pseudo {
               33% {
                  transform: translate3d(45vw, 52vh, 0) rotate(136deg);
               }
               100% {
                  transform: translate3d(-74vw, -19vh, 0) rotate(143deg);
               }
            }
            @keyframes lime-pseudo {
               33% {
                  transform: translate3d(45vw, 52vh, 0) rotate(136deg);
               }
               100% {
                  transform: translate3d(-74vw, -19vh, 0) rotate(143deg);
               }
            }
            .magenta {
               -webkit-animation: magenta linear 30s alternate infinite;
               animation: magenta linear 30s alternate infinite;
               border: 2px solid #6c046c;
               border-radius: 100%;
               width: 43px;
               height: 43px;
               transform: translate3d(3vw, 50vh, 0);
               z-index: 2;
            }
            .magenta::before {
               -webkit-animation: magenta-pseudo linear 15s alternate infinite;
               animation: magenta-pseudo linear 15s alternate infinite;
               background: #6c046c;
               border: 2px solid #6c046c;
               width: 22px;
               height: 40px;
               transform: translate3d(23vw, -46vh, 0) rotate(261deg);
            }
            .magenta::after {
               -webkit-animation: magenta-pseudo linear 20s alternate infinite;
               animation: magenta-pseudo linear 20s alternate infinite;
               border: 2px solid #6c046c;
               width: 19px;
               height: 23px;
               transform: translate3d(90vw, 39vh, 0) rotate(240deg);
            }
            @-webkit-keyframes magenta {
               50% {
                  transform: translate3d(98vw, 14vh, 0);
               }
               100% {
                  transform: translate3d(38vw, 81vh, 0);
               }
            }
            @keyframes magenta {
               50% {
                  transform: translate3d(98vw, 14vh, 0);
               }
               100% {
                  transform: translate3d(38vw, 81vh, 0);
               }
            }
            @-webkit-keyframes magenta-pseudo {
               33% {
                  transform: translate3d(-83vw, 51vh, 0) rotate(146deg);
               }
               100% {
                  transform: translate3d(8vw, -43vh, 0) rotate(297deg);
               }
            }
            @keyframes magenta-pseudo {
               33% {
                  transform: translate3d(-83vw, 51vh, 0) rotate(146deg);
               }
               100% {
                  transform: translate3d(8vw, -43vh, 0) rotate(297deg);
               }
            }
            .lightish-red {
               -webkit-animation: lightish-red linear 30s alternate infinite;
               animation: lightish-red linear 30s alternate infinite;
               border: 2px solid #f04c81;
               border-radius: 100%;
               width: 35px;
               height: 35px;
               transform: translate3d(38vw, 24vh, 0);
               z-index: 4;
            }
            .lightish-red::before {
               -webkit-animation: lightish-red-pseudo linear 15s alternate infinite;
               animation: lightish-red-pseudo linear 15s alternate infinite;
               background: #f04c81;
               border: 2px solid #f04c81;
               width: 11px;
               height: 46px;
               transform: translate3d(4vw, 11vh, 0) rotate(81deg);
            }
            .lightish-red::after {
               -webkit-animation: lightish-red-pseudo linear 20s alternate infinite;
               animation: lightish-red-pseudo linear 20s alternate infinite;
               border: 2px solid #f04c81;
               width: 46px;
               height: 24px;
               transform: translate3d(30vw, 40vh, 0) rotate(215deg);
            }
            @-webkit-keyframes lightish-red {
               50% {
                  transform: translate3d(65vw, 77vh, 0);
               }
               100% {
                  transform: translate3d(44vw, 81vh, 0);
               }
            }
            @keyframes lightish-red {
               50% {
                  transform: translate3d(65vw, 77vh, 0);
               }
               100% {
                  transform: translate3d(44vw, 81vh, 0);
               }
            }
            @-webkit-keyframes lightish-red-pseudo {
               33% {
                  transform: translate3d(-41vw, 11vh, 0) rotate(258deg);
               }
               100% {
                  transform: translate3d(22vw, -7vh, 0) rotate(26deg);
               }
            }
            @keyframes lightish-red-pseudo {
               33% {
                  transform: translate3d(-41vw, 11vh, 0) rotate(258deg);
               }
               100% {
                  transform: translate3d(22vw, -7vh, 0) rotate(26deg);
               }
            }
            .pink {
               -webkit-animation: pink linear 30s alternate infinite;
               animation: pink linear 30s alternate infinite;
               border: 2px solid #ff4293;
               border-radius: 100%;
               width: 6px;
               height: 6px;
               transform: translate3d(99vw, 50vh, 0);
               z-index: 5;
            }
            .pink::before {
               -webkit-animation: pink-pseudo linear 15s alternate infinite;
               animation: pink-pseudo linear 15s alternate infinite;
               background: #ff4293;
               border: 2px solid #ff4293;
               width: 41px;
               height: 24px;
               transform: translate3d(-33vw, 34vh, 0) rotate(24deg);
            }
            .pink::after {
               -webkit-animation: pink-pseudo linear 20s alternate infinite;
               animation: pink-pseudo linear 20s alternate infinite;
               border: 2px solid #ff4293;
               width: 8px;
               height: 11px;
               transform: translate3d(-25vw, -19vh, 0) rotate(337deg);
            }
            @-webkit-keyframes pink {
               50% {
                  transform: translate3d(11vw, 87vh, 0);
               }
               100% {
                  transform: translate3d(64vw, 22vh, 0);
               }
            }
            @keyframes pink {
               50% {
                  transform: translate3d(11vw, 87vh, 0);
               }
               100% {
                  transform: translate3d(64vw, 22vh, 0);
               }
            }
            @-webkit-keyframes pink-pseudo {
               33% {
                  transform: translate3d(-10vw, -18vh, 0) rotate(307deg);
               }
               100% {
                  transform: translate3d(-27vw, -9vh, 0) rotate(196deg);
               }
            }
            @keyframes pink-pseudo {
               33% {
                  transform: translate3d(-10vw, -18vh, 0) rotate(307deg);
               }
               100% {
                  transform: translate3d(-27vw, -9vh, 0) rotate(196deg);
               }
            }
         `}</style>
         <div>
            <div data-particle className="purple"></div>
            <div data-particle className="medium-blue"></div>
            <div data-particle className="light-blue"></div>
            <div data-particle className="red"></div>
            <div data-particle className="orange"></div>
            <div data-particle className="yellow"></div>
            <div data-particle className="cyan"></div>
            <div data-particle className="light-green"></div>
            <div data-particle className="lime"></div>
            <div data-particle className="magenta"></div>
            <div data-particle className="lightish-red"></div>
            <div data-particle className="pink"></div>
         </div>
      </div>
   );
}
