// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    // Thuộc tính trích dẫn tài nguyên prefab của các ngôi sao
    @property(cc.Prefab)
    starPrefab: cc.Prefab = null;

    // Tỉ lệ ngẫu nhiên thời gian biến mất của các ngôi sao
    @property
    maxStarDuration: number = 0;

    @property
    minStarDuration: number = 0;

    // Node lấy thông tin mặt đất để xác định độ cao của ngôi sao
    @property(cc.Node)
    ground: cc.Node = null;

    // Node lấy thông tin của người chơi 
    @property(cc.Node)
    player: cc.Node = null;

    groundY: number;

    // Tham chiếu điểm nhãn
    @property(cc.Label)
    scoreDisplay: cc.Label= null;

    score: number;

    timer: number;

    starDuration: number;

    @property(cc.AudioClip)
    scoreAudio: cc.AudioClip ;

    onLoad(){
        // Lấy điểm neo của mặt đất trên trục y
        this.groundY= this.ground.y + this.ground.height/2; 
        // Tạo ngôi sao mới
        this.spawnNewStar();
        // Khởi tạo điểm
        this.score = 0;

        // Khởi tạo thời gian
        this.timer = 0;
        this.starDuration = 0;

    }

    spawnNewStar(){
        // tạo node sao mới trong cảnh
        var newStar = cc.instantiate(this.starPrefab);
        // đặt node mới vào bên dưới canvas
        this.node.addChild(newStar);
        // Tạo tọa độ ngẫu nhiên cho ngôi sao
        newStar.setPosition(this.getNewStarPosition());
        // lưu tham chiếu của Game object trên tập lệnh Star
        newStar.getComponent('Star').game = this;

        // làm mới thời gian, chọn ngẫu nhiên một giá trị theo tỉ lệ xuất hiện của sao
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    }

    getNewStarPosition(){
        var rand = 0;
        // theo vị trí trên mặt đất và độ cao khi nhảy của nhân vật, lấy ngẫu nhiên một điểm neo của ngôi sao trên trục y
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight +50;

        // theo chiệu rộng của màn hình lấy ngẫu nhiên điểm neo của ngôi sao trên trục x
        var maxX = this.node.width/2;
        var randX = (Math.random()-0.5) * 2 * maxX;
        
        // Trả lại điểm neo cho ngôi sao
        return cc.v2(randX,randY);

    }

    gainScore(){

        this.score += 1;

        // cập nhật điểm số cho scoreDisplay Label
        this.scoreDisplay.string = 'Score: ' + this.score;

        // Bật âm thanh ghi bàn
        cc.audioEngine.playEffect(this.scoreAudio, false);

    }
    protected update(dt: number): void {
        // cập nhật thời gian sau mỗi frame, khi một ngôi sao mới không được tạo sau khi quá thời lượng

        // gọi ra hàm thua cuộc của trò chơi
        if (this.timer > this.starDuration){
            this.gameOver;
            return;
        }
        this.timer += dt;
    }

    gameOver(){
        // Dừng hành động nhảy của nhân vật
        this.player.stopAllActions();
        // khởi động lại cảnh 
        cc.director.loadScene('game');
    }

}
