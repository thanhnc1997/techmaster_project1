const menu = [
	{
		id: 1,
		name: 'Xôi xéo',
		thumbnail: 'images/1.jpg',
		status: 'Còn'
	},
	{
		id: 2,
		name: 'Xôi ngô',
		thumbnail: 'images/2.jpg',
		status: 'Còn'
	},
	{
		id: 3,
		name: 'Xôi lạc',
		thumbnail: 'images/3.jpg',
		status: 'Hết'
	},
	{
		id: 4,
		name: 'Xôi đỗ đen',
		thumbnail: 'images/4.jpeg',
		status: 'Hết'
	},
	{
		id: 5,
		name: 'Xôi thịt kho tàu',
		thumbnail: 'images/5.jpg',
		status: 'Còn'
	},
	{
		id: 6,
		name: 'Xôi gấc',
		thumbnail: 'images/6.jpg',
		status: 'Còn'
	}
]

menu.map((dish) => {
	let status_class_style = '';
	if (dish.status == 'Còn') status_class_style = 'completed';
	if (dish.status == 'Hết') status_class_style = 'danger';
	
	let item = document.createElement('article');
	item.innerHTML = `
	<div class="image" style="background-image: url(${dish.thumbnail || ''})">
		<span class="${status_class_style}">${dish.status || ''}</span>
	</div>
	<div class="content">
		<h3>${dish.name || ''}</h3>
	</div>
	`;
	
	document.querySelector('main .row').appendChild(item);
});
