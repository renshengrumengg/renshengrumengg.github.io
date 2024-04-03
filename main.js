function redirectToNextPage() {
    window.location.href = "index1.1.html"; // 更改为你要跳转的页面的URL
}

const magicButton = document.getElementById('magicButton');
const magicText = document.getElementById('magicText');
const messages = [
    "听说你最近有烦心事儿了，对不对",
    "这年头，谁还没点烦心事儿啦。 这太正常了",
    "凡事都得往好的一方面想嘛！ 你看这不 又解锁了个神奇的按钮:) 听说点击下面图片 你会看到一个大大大美女",
    "你猜对啦！ 夸夸我吧，是不是特好看!",
    "我猜你看到图片后是不是笑了 心里想“这家伙拍照真差，还不是全靠老娘的颜值撑着”",
    "在我印象里 你总是很开心 很乐观的啊",
    "虽然似乎所有的事 似乎都不全尽人意， 但是天气好了 事情肯定也会往好的方向发展",
    "你总是有能力去完成其他人完不成的事！ 你俄语好 性格好 人又漂亮...",
    "你的优点 简直是多到数都数不过来 你可是我的偶像啊！",
    "偶像 加油！",
    "... 我知道我嘴笨 很多东西 我表达不清白",
    "写不出来了 未完待续...",
    "加油！ 加油！",
];
let currentMessageIndex = 0;

magicButton.addEventListener('click', function () {
    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0; // 如果超出了消息数组的长度，重置为0
    }
    magicText.value = messages[currentMessageIndex];
    magicText.style.height = 'auto';
    magicText.style.height = magicText.scrollHeight + 'px';
    if (currentMessageIndex === 2) { // 当文本框显示第三句话时
        popupButton.style.display = 'inline-block'; // 显示弹出按钮
    }
    if (currentMessageIndex !== 2) {
        popupButton.style.display = 'none';
    }
    currentMessageIndex++;
});

const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');

musicButton.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        musicButton.textContent = "点击停止播放音乐";
    } else {
        music.pause();
        musicButton.textContent = "这是一个神奇的按钮，点击据说会播放音乐";
    }
});

const popupButton = document.getElementById('popupButton');
const popupImage = document.getElementById('popupImage');
popupButton.addEventListener('click', function () {
    popupImage.style.display = 'block'; // 显示弹出图片
  
    // 设置定时器，10秒后隐藏图片
    setTimeout(function () {
      popupImage.style.display = 'none';
    }, 2000);
  });