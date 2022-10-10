"use strict";
cc._RF.push(module, '230a2dHXc5OI5D/hk+mLbCJ', 'Player');
// Scripts/Player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpHeight = 150;
        _this.jumpDuration = 0.3;
        _this.maxMoveSpeed = 400;
        _this.accel = 1000;
        _this.xSpeed = 0;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
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
    };
    NewClass.prototype.onDestroy = function () {
        // Hủy theo dõi dữ liệu nhập bằng bàn phím
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        // Cập nhật tốc độ từng khung hình theo hướng gia tốc hiện tại.
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // Hạn chế tốc độ di chuyển của nhân vật ở tốc độ tối đa
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            // Nếu tốc độ đạt đến giới hạn, sử dụng tốc độ tối đa cho chính nó
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        // Cập nhật  vị trí của nhân vật chính theo tốc độ hiện tại
        this.node.x += this.xSpeed * dt;
    };
    // update (dt) {}
    NewClass.prototype.runJumpAction = function () {
        // Nhảy lên
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sinOut' });
        // Nhảy xuống
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sinIn' });
        // Tạo easing và thực hiện hành động
        var tween = cc.tween()
            // Thực hiện hành động theo thứ tự jumpUp, jumpDown
            .sequence(jumpUp, jumpDown)
            // Thêm hàm 'playJumpSound()' được xác định khi hành động kết thúc
            .call(this.playJumpSound, this);
        // Lặp lại hành động
        return cc.tween().repeatForever(tween);
    };
    NewClass.prototype.playJumpSound = function () {
        // Gọi công cụ âm thanh để phát âm thanh
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewClass.prototype.onKeyDown = function (event) {
        // Cài một nút khi chạy hàm
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        // Tắt nút khi chạy hàm
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    __decorate([
        property
    ], NewClass.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], NewClass.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "accel", void 0);
    __decorate([
        property
    ], NewClass.prototype, "xSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();