export const salon = {
	name: 'Coco salon',
	alternateName: 'ココサロン',
	telephone: '+81-80-4897-6505',
	telephoneDisplay: '080-4897-6505',
	telephoneHref: 'tel:08048976505',
	reserveUrl: 'https://beauty.hotpepper.jp/kr/slnH000801129/',
	lineUrl: 'https://lin.ee/TIMifGW',
	instagramUrl: 'https://www.instagram.com/cocosalon.24/',
	mapUrl: 'https://maps.app.goo.gl/Xv7No7XRm4XV82iF7',
	mapEmbed:
		'https://maps.google.com/maps?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E8%A5%BF%E5%8C%BA%E9%AB%98%E5%B3%B62-10-13%20%E6%A8%AA%E6%B5%9C%E6%9D%B1%E5%8F%A3%E3%83%93%E3%83%AB&z=16&output=embed&hl=ja',
	postalCode: '220-0011',
	addressRegion: '神奈川県',
	addressLocality: '横浜市西区',
	streetAddress: '高島2-10-13 横浜東口ビル810',
	opens: '10:00',
	closes: '19:00',
	closed: '祝日',
} as const;

export const menus = [
	{
		no: '01',
		tag: 'Signature',
		name: 'ハーブピーリング',
		text: '植物由来の酵素と陶肌パウダーで、古い角質や皮脂を整えながら肌になじませます。その日の肌状態に合わせて組み合わせを変えます。',
		prices: [
			{ label: '初回', value: '¥11,000', amount: 11000, time: '120分' },
			{ label: 'リピート', value: '¥15,400〜', amount: 15400, from: true, time: '90分' },
		],
	},
	{
		no: '02',
		tag: '',
		name: '毛穴洗浄',
		text: '毛穴の詰まりや余分な皮脂を洗い流し、キメを整えます。短時間で受けやすいメニューです。',
		prices: [{ label: '一律', value: '¥8,900', amount: 8900, time: '50分' }],
	},
	{
		no: '03',
		tag: '',
		name: 'エステ版リジュラン導入',
		text: '医療機関の注射ではなく、エステティックの導入によるケアです。うるおいとハリをサポートします。',
		prices: [{ label: '料金', value: '¥14,800〜', amount: 14800, from: true, time: '50分' }],
	},
	{
		no: '04',
		tag: '',
		name: '脂肪分解 小顔レモンボトル導入',
		text: 'フェイスラインが気になる方への導入ケアです。',
		prices: [{ label: '料金', value: '¥12,800〜', amount: 12800, from: true, time: '60分' }],
	},
	{
		no: '05',
		tag: '敏感肌',
		name: '陶肌ピール',
		text: 'ニキビやゆらぎが気になる方、お肌が敏感な方の状態に合わせて行います。',
		prices: [{ label: '料金', value: '¥12,000〜', amount: 12000, from: true, time: '60分' }],
	},
] as const;

export const faqs = [
	{
		q: '予約はどうすればいいですか？',
		a: 'ホットペッパービューティー、またはLINEからご連絡ください。完全予約制です。お電話は 080‑4897‑6505 です。',
	},
	{
		q: '営業時間と定休日を教えてください。',
		a: '営業時間は 10:00–19:00 です。定休日は祝日です。',
	},
	{
		q: 'サロンはどこにありますか？',
		a: '〒220-0011 神奈川県横浜市西区高島2-10-13 横浜東口ビル810です。横浜駅東口から徒歩4分。お車の場合は近隣のコインパーキングをご利用ください。',
	},
	{
		q: '男性も利用できますか？',
		a: 'はい。男性の方もご利用いただけます。個室でマンツーマンの施術です。',
	},
	{
		q: '子どもを連れて行けますか？',
		a: 'キッズスペースはありません。お一人で待てるお子さまの同伴は可能です。',
	},
	{
		q: '支払いに使える方法は何ですか？',
		a: '現金、クレジットカード、交通系IC、PayPay、QRコードがご利用いただけます。',
	},
	{
		q: 'ハーブピーリングの料金と時間はどのくらいですか？',
		a: '初回は ¥11,000 / 120分、リピートは ¥15,400〜 / 90分です。効果には個人差があります。掲載の施術はエステティックであり、医療行為ではありません。',
	},
] as const;
