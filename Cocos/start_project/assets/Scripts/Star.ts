// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "./Game";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // Khi khoảng cách giữa ngôi sao và nhân vật chính nhỏ hơn giá trị này, việc thu thập điểm sẽ được hoàn thành
    @property
    pickRadius: number = 0;


    getPlayerDistance(){
        // xác định khoảng cách theo Player 
        var playerPos = cc.v3(0,1,1);
        playerPos = Game.arguments.player.getPosition();
        console.log(playerPos);
        // Tính khoảng cách giữa hai nút theo vị trí của chúng
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    }

    onPicked(){
        //Khi những ngôi sao bắt đầu được thu thập, tự động gọi trong Game script để tạo một ngôi sao mới
        Game.arguments.player.spawnNewStar();

        // Gọi phương pháp tính điểm của Game script
        Game.arguments.player.gainScore();

        // Sau đó phá hủy node của ngôi sao hiện tại
        this.node.destroy();
    }

    update(dt: number): void {
        // Xác định xem khoảng cách giữa ngôi sao và nhân vật chính có nhỏ hơn khoảng cách thu thập cho mỗi khung hình không
        if (this.getPlayerDistance() < this.pickRadius){
            // gọi hành động thu thập
            this.onPicked;
            return;
        }
        // Cập nhật độ trong suốt của ngôi sao theo thời gian trong Game script
        var opacityRatio = 1 - Game.arguments.player.timer/Game.arguments.player.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    }
}
