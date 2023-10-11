"use client";
import React from "react";

export default function DoteParticle() {
   return (
      <div>
         <style jsx>{`
            #particle-container {
               left: 0;
               top: 0;
               position: absolute;
            }
            .particle {
               position: absolute;
               border-radius: 50%;
            }

            @-webkit-keyframes particle-animation-1 {
               100% {
                  transform: translate3d(1vw, 7vh, 7px);
               }
            }

            @keyframes particle-animation-1 {
               100% {
                  transform: translate3d(1vw, 7vh, 7px);
               }
            }
            .particle:nth-child(1) {
               -webkit-animation: particle-animation-1 60s infinite;
               animation: particle-animation-1 60s infinite;
               opacity: 0.23;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -0.2s;
               animation-delay: -0.2s;
               transform: translate3d(85vw, 38vh, 41px);
               background: #d9a026;
            }

            @-webkit-keyframes particle-animation-2 {
               100% {
                  transform: translate3d(63vw, 1vh, 86px);
               }
            }

            @keyframes particle-animation-2 {
               100% {
                  transform: translate3d(63vw, 1vh, 86px);
               }
            }
            .particle:nth-child(2) {
               -webkit-animation: particle-animation-2 60s infinite;
               animation: particle-animation-2 60s infinite;
               opacity: 0.36;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -0.4s;
               animation-delay: -0.4s;
               transform: translate3d(79vw, 39vh, 28px);
               background: #3bd926;
            }

            @-webkit-keyframes particle-animation-3 {
               100% {
                  transform: translate3d(12vw, 88vh, 78px);
               }
            }

            @keyframes particle-animation-3 {
               100% {
                  transform: translate3d(12vw, 88vh, 78px);
               }
            }
            .particle:nth-child(3) {
               -webkit-animation: particle-animation-3 60s infinite;
               animation: particle-animation-3 60s infinite;
               opacity: 0.98;
               height: 9px;
               width: 9px;
               -webkit-animation-delay: -0.6s;
               animation-delay: -0.6s;
               transform: translate3d(37vw, 34vh, 52px);
               background: #b5d926;
            }

            @-webkit-keyframes particle-animation-4 {
               100% {
                  transform: translate3d(62vw, 29vh, 77px);
               }
            }

            @keyframes particle-animation-4 {
               100% {
                  transform: translate3d(62vw, 29vh, 77px);
               }
            }
            .particle:nth-child(4) {
               -webkit-animation: particle-animation-4 60s infinite;
               animation: particle-animation-4 60s infinite;
               opacity: 0.18;
               height: 9px;
               width: 9px;
               -webkit-animation-delay: -0.8s;
               animation-delay: -0.8s;
               transform: translate3d(83vw, 7vh, 96px);
               background: #47d926;
            }

            @-webkit-keyframes particle-animation-5 {
               100% {
                  transform: translate3d(8vw, 24vh, 52px);
               }
            }

            @keyframes particle-animation-5 {
               100% {
                  transform: translate3d(8vw, 24vh, 52px);
               }
            }
            .particle:nth-child(5) {
               -webkit-animation: particle-animation-5 60s infinite;
               animation: particle-animation-5 60s infinite;
               opacity: 0.5;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -1s;
               animation-delay: -1s;
               transform: translate3d(38vw, 87vh, 15px);
               background: #a0d926;
            }

            @-webkit-keyframes particle-animation-6 {
               100% {
                  transform: translate3d(16vw, 78vh, 16px);
               }
            }

            @keyframes particle-animation-6 {
               100% {
                  transform: translate3d(16vw, 78vh, 16px);
               }
            }
            .particle:nth-child(6) {
               -webkit-animation: particle-animation-6 60s infinite;
               animation: particle-animation-6 60s infinite;
               opacity: 0.21;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -1.2s;
               animation-delay: -1.2s;
               transform: translate3d(1vw, 13vh, 66px);
               background: #d94d26;
            }

            @-webkit-keyframes particle-animation-7 {
               100% {
                  transform: translate3d(15vw, 9vh, 45px);
               }
            }

            @keyframes particle-animation-7 {
               100% {
                  transform: translate3d(15vw, 9vh, 45px);
               }
            }
            .particle:nth-child(7) {
               -webkit-animation: particle-animation-7 60s infinite;
               animation: particle-animation-7 60s infinite;
               opacity: 0.14;
               height: 7px;
               width: 7px;
               -webkit-animation-delay: -1.4s;
               animation-delay: -1.4s;
               transform: translate3d(59vw, 14vh, 68px);
               background: #77d926;
            }

            @-webkit-keyframes particle-animation-8 {
               100% {
                  transform: translate3d(68vw, 64vh, 31px);
               }
            }

            @keyframes particle-animation-8 {
               100% {
                  transform: translate3d(68vw, 64vh, 31px);
               }
            }
            .particle:nth-child(8) {
               -webkit-animation: particle-animation-8 60s infinite;
               animation: particle-animation-8 60s infinite;
               opacity: 0.69;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -1.6s;
               animation-delay: -1.6s;
               transform: translate3d(33vw, 28vh, 66px);
               background: #d97a26;
            }

            @-webkit-keyframes particle-animation-9 {
               100% {
                  transform: translate3d(76vw, 17vh, 99px);
               }
            }

            @keyframes particle-animation-9 {
               100% {
                  transform: translate3d(76vw, 17vh, 99px);
               }
            }
            .particle:nth-child(9) {
               -webkit-animation: particle-animation-9 60s infinite;
               animation: particle-animation-9 60s infinite;
               opacity: 0.41;
               height: 7px;
               width: 7px;
               -webkit-animation-delay: -1.8s;
               animation-delay: -1.8s;
               transform: translate3d(36vw, 55vh, 78px);
               background: #d92671;
            }

            @-webkit-keyframes particle-animation-10 {
               100% {
                  transform: translate3d(9vw, 15vh, 95px);
               }
            }

            @keyframes particle-animation-10 {
               100% {
                  transform: translate3d(9vw, 15vh, 95px);
               }
            }
            .particle:nth-child(10) {
               -webkit-animation: particle-animation-10 60s infinite;
               animation: particle-animation-10 60s infinite;
               opacity: 0.57;
               height: 7px;
               width: 7px;
               -webkit-animation-delay: -2s;
               animation-delay: -2s;
               transform: translate3d(81vw, 14vh, 12px);
               background: #50d926;
            }

            @-webkit-keyframes particle-animation-11 {
               100% {
                  transform: translate3d(3vw, 19vh, 74px);
               }
            }

            @keyframes particle-animation-11 {
               100% {
                  transform: translate3d(3vw, 19vh, 74px);
               }
            }
            .particle:nth-child(11) {
               -webkit-animation: particle-animation-11 60s infinite;
               animation: particle-animation-11 60s infinite;
               opacity: 0.07;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -2.2s;
               animation-delay: -2.2s;
               transform: translate3d(9vw, 40vh, 4px);
               background: #26d991;
            }

            @-webkit-keyframes particle-animation-12 {
               100% {
                  transform: translate3d(90vw, 53vh, 65px);
               }
            }

            @keyframes particle-animation-12 {
               100% {
                  transform: translate3d(90vw, 53vh, 65px);
               }
            }
            .particle:nth-child(12) {
               -webkit-animation: particle-animation-12 60s infinite;
               animation: particle-animation-12 60s infinite;
               opacity: 0.1;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -2.4s;
               animation-delay: -2.4s;
               transform: translate3d(38vw, 79vh, 63px);
               background: #267ad9;
            }

            @-webkit-keyframes particle-animation-13 {
               100% {
                  transform: translate3d(63vw, 47vh, 89px);
               }
            }

            @keyframes particle-animation-13 {
               100% {
                  transform: translate3d(63vw, 47vh, 89px);
               }
            }
            .particle:nth-child(13) {
               -webkit-animation: particle-animation-13 60s infinite;
               animation: particle-animation-13 60s infinite;
               opacity: 0.47;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -2.6s;
               animation-delay: -2.6s;
               transform: translate3d(88vw, 11vh, 4px);
               background: #a026d9;
            }

            @-webkit-keyframes particle-animation-14 {
               100% {
                  transform: translate3d(14vw, 55vh, 11px);
               }
            }

            @keyframes particle-animation-14 {
               100% {
                  transform: translate3d(14vw, 55vh, 11px);
               }
            }
            .particle:nth-child(14) {
               -webkit-animation: particle-animation-14 60s infinite;
               animation: particle-animation-14 60s infinite;
               opacity: 0.97;
               height: 9px;
               width: 9px;
               -webkit-animation-delay: -2.8s;
               animation-delay: -2.8s;
               transform: translate3d(27vw, 74vh, 52px);
               background: #7a26d9;
            }

            @-webkit-keyframes particle-animation-15 {
               100% {
                  transform: translate3d(14vw, 41vh, 36px);
               }
            }

            @keyframes particle-animation-15 {
               100% {
                  transform: translate3d(14vw, 41vh, 36px);
               }
            }
            .particle:nth-child(15) {
               -webkit-animation: particle-animation-15 60s infinite;
               animation: particle-animation-15 60s infinite;
               opacity: 0.7;
               height: 7px;
               width: 7px;
               -webkit-animation-delay: -3s;
               animation-delay: -3s;
               transform: translate3d(43vw, 31vh, 63px);
               background: #d92635;
            }

            @-webkit-keyframes particle-animation-16 {
               100% {
                  transform: translate3d(75vw, 4vh, 22px);
               }
            }

            @keyframes particle-animation-16 {
               100% {
                  transform: translate3d(75vw, 4vh, 22px);
               }
            }
            .particle:nth-child(16) {
               -webkit-animation: particle-animation-16 60s infinite;
               animation: particle-animation-16 60s infinite;
               opacity: 0.69;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -3.2s;
               animation-delay: -3.2s;
               transform: translate3d(16vw, 53vh, 57px);
               background: #26d944;
            }

            @-webkit-keyframes particle-animation-17 {
               100% {
                  transform: translate3d(70vw, 67vh, 33px);
               }
            }

            @keyframes particle-animation-17 {
               100% {
                  transform: translate3d(70vw, 67vh, 33px);
               }
            }
            .particle:nth-child(17) {
               -webkit-animation: particle-animation-17 60s infinite;
               animation: particle-animation-17 60s infinite;
               opacity: 0.89;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -3.4s;
               animation-delay: -3.4s;
               transform: translate3d(26vw, 20vh, 34px);
               background: #a6d926;
            }

            @-webkit-keyframes particle-animation-18 {
               100% {
                  transform: translate3d(85vw, 33vh, 23px);
               }
            }

            @keyframes particle-animation-18 {
               100% {
                  transform: translate3d(85vw, 33vh, 23px);
               }
            }
            .particle:nth-child(18) {
               -webkit-animation: particle-animation-18 60s infinite;
               animation: particle-animation-18 60s infinite;
               opacity: 0.51;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -3.6s;
               animation-delay: -3.6s;
               transform: translate3d(89vw, 81vh, 33px);
               background: #7d26d9;
            }

            @-webkit-keyframes particle-animation-19 {
               100% {
                  transform: translate3d(19vw, 8vh, 95px);
               }
            }

            @keyframes particle-animation-19 {
               100% {
                  transform: translate3d(19vw, 8vh, 95px);
               }
            }
            .particle:nth-child(19) {
               -webkit-animation: particle-animation-19 60s infinite;
               animation: particle-animation-19 60s infinite;
               opacity: 0.05;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -3.8s;
               animation-delay: -3.8s;
               transform: translate3d(67vw, 72vh, 27px);
               background: #9dd926;
            }

            @-webkit-keyframes particle-animation-20 {
               100% {
                  transform: translate3d(16vw, 54vh, 48px);
               }
            }

            @keyframes particle-animation-20 {
               100% {
                  transform: translate3d(16vw, 54vh, 48px);
               }
            }
            .particle:nth-child(20) {
               -webkit-animation: particle-animation-20 60s infinite;
               animation: particle-animation-20 60s infinite;
               opacity: 0.23;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -4s;
               animation-delay: -4s;
               transform: translate3d(66vw, 42vh, 60px);
               background: #d9a026;
            }

            @-webkit-keyframes particle-animation-21 {
               100% {
                  transform: translate3d(4vw, 27vh, 76px);
               }
            }

            @keyframes particle-animation-21 {
               100% {
                  transform: translate3d(4vw, 27vh, 76px);
               }
            }
            .particle:nth-child(21) {
               -webkit-animation: particle-animation-21 60s infinite;
               animation: particle-animation-21 60s infinite;
               opacity: 0.84;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -4.2s;
               animation-delay: -4.2s;
               transform: translate3d(5vw, 63vh, 62px);
               background: #26d0d9;
            }

            @-webkit-keyframes particle-animation-22 {
               100% {
                  transform: translate3d(62vw, 53vh, 4px);
               }
            }

            @keyframes particle-animation-22 {
               100% {
                  transform: translate3d(62vw, 53vh, 4px);
               }
            }
            .particle:nth-child(22) {
               -webkit-animation: particle-animation-22 60s infinite;
               animation: particle-animation-22 60s infinite;
               opacity: 0.35;
               height: 8px;
               width: 8px;
               -webkit-animation-delay: -4.4s;
               animation-delay: -4.4s;
               transform: translate3d(44vw, 84vh, 46px);
               background: #c426d9;
            }

            @-webkit-keyframes particle-animation-23 {
               100% {
                  transform: translate3d(84vw, 21vh, 10px);
               }
            }

            @keyframes particle-animation-23 {
               100% {
                  transform: translate3d(84vw, 21vh, 10px);
               }
            }
            .particle:nth-child(23) {
               -webkit-animation: particle-animation-23 60s infinite;
               animation: particle-animation-23 60s infinite;
               opacity: 0.61;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -4.6s;
               animation-delay: -4.6s;
               transform: translate3d(71vw, 3vh, 55px);
               background: #26d97d;
            }

            @-webkit-keyframes particle-animation-24 {
               100% {
                  transform: translate3d(82vw, 20vh, 19px);
               }
            }

            @keyframes particle-animation-24 {
               100% {
                  transform: translate3d(82vw, 20vh, 19px);
               }
            }
            .particle:nth-child(24) {
               -webkit-animation: particle-animation-24 60s infinite;
               animation: particle-animation-24 60s infinite;
               opacity: 0.87;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -4.8s;
               animation-delay: -4.8s;
               transform: translate3d(84vw, 39vh, 2px);
               background: #2926d9;
            }

            @-webkit-keyframes particle-animation-25 {
               100% {
                  transform: translate3d(51vw, 82vh, 39px);
               }
            }

            @keyframes particle-animation-25 {
               100% {
                  transform: translate3d(51vw, 82vh, 39px);
               }
            }
            .particle:nth-child(25) {
               -webkit-animation: particle-animation-25 60s infinite;
               animation: particle-animation-25 60s infinite;
               opacity: 0.22;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -5s;
               animation-delay: -5s;
               transform: translate3d(27vw, 25vh, 72px);
               background: #d98226;
            }

            @-webkit-keyframes particle-animation-26 {
               100% {
                  transform: translate3d(71vw, 8vh, 93px);
               }
            }

            @keyframes particle-animation-26 {
               100% {
                  transform: translate3d(71vw, 8vh, 93px);
               }
            }
            .particle:nth-child(26) {
               -webkit-animation: particle-animation-26 60s infinite;
               animation: particle-animation-26 60s infinite;
               opacity: 0.4;
               height: 7px;
               width: 7px;
               -webkit-animation-delay: -5.2s;
               animation-delay: -5.2s;
               transform: translate3d(49vw, 53vh, 90px);
               background: #d94126;
            }

            @-webkit-keyframes particle-animation-27 {
               100% {
                  transform: translate3d(65vw, 90vh, 49px);
               }
            }

            @keyframes particle-animation-27 {
               100% {
                  transform: translate3d(65vw, 90vh, 49px);
               }
            }
            .particle:nth-child(27) {
               -webkit-animation: particle-animation-27 60s infinite;
               animation: particle-animation-27 60s infinite;
               opacity: 0.13;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -5.4s;
               animation-delay: -5.4s;
               transform: translate3d(51vw, 87vh, 47px);
               background: #26bbd9;
            }

            @-webkit-keyframes particle-animation-28 {
               100% {
                  transform: translate3d(61vw, 35vh, 11px);
               }
            }

            @keyframes particle-animation-28 {
               100% {
                  transform: translate3d(61vw, 35vh, 11px);
               }
            }
            .particle:nth-child(28) {
               -webkit-animation: particle-animation-28 60s infinite;
               animation: particle-animation-28 60s infinite;
               opacity: 0.12;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -5.6s;
               animation-delay: -5.6s;
               transform: translate3d(3vw, 86vh, 92px);
               background: #8826d9;
            }

            @-webkit-keyframes particle-animation-29 {
               100% {
                  transform: translate3d(15vw, 80vh, 89px);
               }
            }

            @keyframes particle-animation-29 {
               100% {
                  transform: translate3d(15vw, 80vh, 89px);
               }
            }
            .particle:nth-child(29) {
               -webkit-animation: particle-animation-29 60s infinite;
               animation: particle-animation-29 60s infinite;
               opacity: 0.96;
               height: 10px;
               width: 10px;
               -webkit-animation-delay: -5.8s;
               animation-delay: -5.8s;
               transform: translate3d(33vw, 81vh, 49px);
               background: #26d95f;
            }

            @-webkit-keyframes particle-animation-30 {
               100% {
                  transform: translate3d(47vw, 21vh, 3px);
               }
            }

            @keyframes particle-animation-30 {
               100% {
                  transform: translate3d(47vw, 21vh, 3px);
               }
            }
            .particle:nth-child(30) {
               -webkit-animation: particle-animation-30 60s infinite;
               animation: particle-animation-30 60s infinite;
               opacity: 0.4;
               height: 6px;
               width: 6px;
               -webkit-animation-delay: -6s;
               animation-delay: -6s;
               transform: translate3d(17vw, 52vh, 20px);
               background: #2650d9;
            }
         `}</style>
         <div id="particle-container">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
         </div>
      </div>
   );
}
