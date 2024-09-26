
window.addEventListener('load', function() {
    // GIF表示のために0.8秒待つ
    setTimeout(function() {
        const gifContainer = document.getElementById('gif-container');
        
        // フェードアウトを開始
        gifContainer.classList.remove('fade-in');
        gifContainer.classList.add('fade-out');

        // フェードアウトが完了した後（0.8秒後）にGIFを非表示にする
        setTimeout(function() {
            gifContainer.style.display = 'none'; // GIFアニメーションを完全に消す
            document.getElementById('main-content').style.display = 'block'; // メインコンテンツを表示する
        }, 800); // フェードアウトが完了するまで0.8秒待つ
    }, 800); // GIFを0.8秒間表示
});
