const buttons = document.getElementsByClassName('shareCircle');
const shareBlock = document.getElementById('shareBlock');
const authorInfo = document.getElementById('authorInfo');

function clickShare() {
    shareBlock.classList.toggle('hidden');
    handleAuthorInfo();
}

function handleAuthorInfo() {
    if (window.innerWidth < 745 && !shareBlock.classList.contains('hidden')) {
        authorInfo.classList.add('hidden');
    } else {
            authorInfo.classList.remove('hidden');
    }
}

window.addEventListener('resize', () => {
    if (!shareBlock.classList.contains('hidden')) {
        handleAuthorInfo();
    }
})

for (let button of buttons) {
    button.addEventListener('click', clickShare);
}