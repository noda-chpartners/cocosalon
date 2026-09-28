import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector<HTMLElement>('.header');
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const panel = document.querySelector<HTMLElement>('#nav-panel');

const lenis = new Lenis({
	allowNestedScroll: true,
	anchors: false,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
	lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const headerOffset = -84;

document.addEventListener('click', (event) => {
	const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
	if (!(link instanceof HTMLAnchorElement)) return;
	const id = link.getAttribute('href');
	if (!id || id === '#') return;
	const target = document.querySelector(id);
	if (!(target instanceof HTMLElement)) return;
	event.preventDefault();
	if (navOpen) closeNav(false);
	const heading = target.querySelector('h1, h2');
	const dest = heading instanceof HTMLElement ? heading : target;
	lenis.scrollTo(dest, { offset: headerOffset });
	history.pushState(null, '', id);
});

ScrollTrigger.create({
	start: 24,
	onEnter: () => header?.classList.add('is-scrolled'),
	onLeaveBack: () => header?.classList.remove('is-scrolled'),
});

document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
	ScrollTrigger.create({
		trigger: section,
		start: 'top 42%',
		end: 'bottom 42%',
		onToggle: (self) => {
			if (!self.isActive) return;
			document.querySelectorAll<HTMLAnchorElement>('.nav-desktop a').forEach((anchor) => {
				anchor.classList.toggle('is-current', anchor.getAttribute('href') === `#${section.id}`);
			});
		},
	});
});

let navOpen = false;

function prefersReduce() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function openNav() {
	if (!panel || !toggle || navOpen) return;
	navOpen = true;
	document.documentElement.classList.add('nav-open');
	panel.inert = false;
	panel.setAttribute('aria-hidden', 'false');
	toggle.setAttribute('aria-expanded', 'true');
	toggle.setAttribute('aria-label', 'メニューを閉じる');
	lenis.stop();

	if (prefersReduce()) {
		gsap.set(panel, { autoAlpha: 1 });
	} else {
		gsap.fromTo(panel, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
		gsap.fromTo(
			panel.querySelectorAll('nav a'),
			{ autoAlpha: 0, y: 16 },
			{ autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.05, delay: 0.06, ease: 'power3.out', overwrite: 'auto' },
		);
	}

	panel.querySelector('a')?.focus();
}

function closeNav(restoreFocus: boolean) {
	if (!panel || !toggle || !navOpen) return;
	navOpen = false;
	document.documentElement.classList.remove('nav-open');
	toggle.setAttribute('aria-expanded', 'false');
	toggle.setAttribute('aria-label', 'メニューを開く');
	lenis.start();

	const finish = () => {
		panel.inert = true;
		panel.setAttribute('aria-hidden', 'true');
		gsap.set(panel.querySelectorAll('nav a'), { clearProps: 'all' });
		if (restoreFocus) toggle.focus();
	};

	if (prefersReduce()) {
		gsap.set(panel, { autoAlpha: 0 });
		finish();
		return;
	}

	gsap.to(panel, { autoAlpha: 0, duration: 0.28, ease: 'power1.in', onComplete: finish });
}

toggle?.addEventListener('click', () => {
	if (navOpen) closeNav(true);
	else openNav();
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && navOpen) closeNav(true);
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 900 && navOpen) closeNav(false);
});

const motion = gsap.matchMedia();

motion.add('(prefers-reduced-motion: no-preference)', () => {
	const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
	intro
		.fromTo('.hero-frame', { clipPath: 'inset(0 0 100% 0 round 28px)' }, { clipPath: 'inset(0 0 0% 0 round 28px)', duration: 1.3, ease: 'power4.inOut' })
		.fromTo('.hero-img', { scale: 1.18 }, { scale: 1, duration: 2.2, ease: 'power2.out' }, 0)
		.fromTo('.hero-anim', { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 0.7);

	gsap.to('.hero-img', {
		yPercent: 12,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});

	document.querySelectorAll<HTMLElement>('.parallax').forEach((box) => {
		const img = box.querySelector('img');
		if (!img) return;
		gsap.fromTo(
			img,
			{ yPercent: -5 },
			{
				yPercent: 5,
				ease: 'none',
				scrollTrigger: {
					trigger: box,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			},
		);
	});

	ScrollTrigger.batch('.reveal', {
		start: 'top 88%',
		once: true,
		onEnter: (batch) => {
			gsap.fromTo(
				batch,
				{ autoAlpha: 0, y: 30 },
				{ autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power3.out', overwrite: true },
			);
		},
	});
});

window.addEventListener('load', () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());
