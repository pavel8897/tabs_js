window.onload = function(){
	var out = ''
	var tabs = document.querySelector('.tabs')
	var texts = document.querySelector('.text')
	var count = 0;

	for(var key in tabsArr){
		var tab = document.createElement('div')
		tab.innerHTML = tabsArr[key].tabsName		
		count == 0 ? tab.className = 'tab active' : tab.className = 'tab'
		tab.setAttribute('data-tab', tabsArr[key].dataTab)
		tabs.append(tab);

		var text = document.createElement('div')
		text.innerHTML = tabsArr[key].text
		if(count == 0){
			text.style.display = 'block'
		}
		texts.append(text)
		count++;
	}

	document.querySelector('.wrapper').onclick = function(event){
		if(event.target.classList == 'tab'){
			let tabAtr = event.target.getAttribute('data-tab');
			let tabs = document.querySelectorAll('.tabs div');
			for(let i=0;i<tabs.length;i++){
				tabs[i].classList.remove('active')
			}
			event.target.classList.add('active')
			let text = document.querySelectorAll('.text div');
			for(let i=0;i<text.length;i++){
				if(tabAtr == i){
					text[i].style.display = 'block'
				}else{
					text[i].style.display = 'none'
				}
			}
		}
	}
}