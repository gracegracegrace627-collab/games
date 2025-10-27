function checkAnswer() {
  const ans = document.getElementById('answer').value.trim().toLowerCase();
  const hint = document.getElementById('hint');

  if (ans === 'camp_alpha') {
    hint.innerHTML = "✅ 正确！下一个页面是：<a href='camp_alpha.html'>camp_alpha.html</a>";
  } else {
    hint.textContent = "提示：试着查查这些坐标在哪，也许有答案。";
  }
}
