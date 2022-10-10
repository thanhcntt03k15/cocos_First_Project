// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    jumpHeight: number = 150;

    @property
    jumpDuration: number = 0.3;

    @property
    maxMoveSpeed: number = 400;

    @property
    accel: number = 1000;

    accLeft: boolean;
    accRight: boolean;

    @property  
    xSpeed: number = 0;

    @property(cc.AudioClip)
    jumpAudio: cc.AudioClip ;

    onLoad(){

        // Khởi tạo hành động nhảy
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();

        // Công tắc hướng gia tốc
        this.accLeft = false;
        this.accRight = false;

        // Vận tốc ngang hiện tại của nhân vậy chính
        this.xSpeed = 0;

        // Khởi tạo đầu vào từ bàn phím
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy(): void {
        // Hủy theo dõi dữ liệu nhập bằng bàn phím
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    start () {

    }

    update(dt: number): void {
        // Cập nhật tốc độ từng khung hình theo hướng gia tốc hiện tại.
        if(this.accLeft){
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight){
            this.xSpeed += this.accel * dt;
        }
        // Hạn chế tốc độ di chuyển của nhân vật ở tốc độ tối đa
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed){
            // Nếu tốc độ đạt đến giới hạn, sử dụng tốc độ tối đa cho chính nó
            this.xSpeed = this.maxMoveSpeed * this.xSpeed/ Math.abs(this.xSpeed);
        } 
        // Cập nhật  vị trí của nhân vật chính theo tốc độ hiện tại
        this.node.x += this.xSpeed * dt;
    }

    // update (dt) {}
    runJumpAction(){
        // Nhảy lên
        var jumpUp = cc.tween().by(this.jumpDuration, {y: this.jumpHeight}, {easing: 'sinOut'});

        // Nhảy xuống
        var jumpDown = cc.tween().by(this.jumpDuration, {y: -this.jumpHeight}, {easing: 'sinIn'});

        // Tạo easing và thực hiện hành động
        var tween = cc.tween()
                            // Thực hiện hành động theo thứ tự jumpUp, jumpDown
                            .sequence(jumpUp, jumpDown)
                            // Thêm hàm 'playJumpSound()' được xác định khi hành động kết thúc
                            .call(this.playJumpSound, this);

        
        // Lặp lại hành động
        return cc.tween().repeatForever(tween);

    }
    playJumpSound(){
        // Gọi công cụ âm thanh để phát âm thanh
        cc.audioEngine.playEffect(this.jumpAudio, false);
    }

    onKeyDown(event){
        
        // Cài một nút khi chạy hàm
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    }

    onKeyUp(event){

        // Tắt nút khi chạy hàm
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    }
}
