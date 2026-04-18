<!DOCTYPE html>

<html class="light" lang="el"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Manrope', sans-serif;
            background-color: #fff8f8;
            color: #1f1a1b;
        }
        h1, h2, h3, .serif-text {
            font-family: 'Noto Serif', serif;
        }
        .neumorphic-card {
            box-shadow: 12px 12px 20px 0px rgba(80, 68, 68, 0.06), -8px -8px 20px 0px rgba(255, 255, 255, 0.8);
        }
        .gold-gradient {
            background: linear-gradient(135deg, #735c00 0%, #f1ca50 100%);
        }
        .glass-panel {
            background: rgba(248, 216, 219, 0.6);
            backdrop-filter: blur(25px);
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "outline-variant": "#d4c2c2",
                        "on-surface-variant": "#504444",
                        "surface-container-high": "#efe6e7",
                        "error-container": "#ffdad6",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-low": "#fbf1f2",
                        "primary": "#735c00",
                        "outline": "#827473",
                        "surface-bright": "#fff8f8",
                        "surface-dim": "#e1d8d9",
                        "on-secondary": "#ffffff",
                        "on-tertiary-fixed-variant": "#474746",
                        "on-surface": "#1f1a1b",
                        "on-primary-fixed": "#241a00",
                        "secondary-fixed-dim": "#debfc2",
                        "tertiary-fixed": "#e5e2e1",
                        "on-tertiary-fixed": "#1c1b1b",
                        "inverse-primary": "#e9c349",
                        "inverse-surface": "#342f30",
                        "secondary-container": "#f8d8db",
                        "tertiary-fixed-dim": "#c8c6c5",
                        "on-primary-container": "#6b5500",
                        "surface-container": "#f5eced",
                        "surface-variant": "#eae0e1",
                        "surface-tint": "#735c00",
                        "on-error-container": "#93000a",
                        "tertiary": "#5f5e5e",
                        "tertiary-container": "#d0cdcd",
                        "on-primary-fixed-variant": "#574500",
                        "secondary": "#70585b",
                        "on-secondary-container": "#755d5f",
                        "inverse-on-surface": "#f8eeef",
                        "surface-container-highest": "#eae0e1",
                        "on-tertiary-container": "#585757",
                        "on-error": "#ffffff",
                        "surface": "#fff8f8",
                        "on-secondary-fixed-variant": "#574144",
                        "on-primary": "#ffffff",
                        "on-background": "#1f1a1b",
                        "on-tertiary": "#ffffff",
                        "secondary-fixed": "#fbdbde",
                        "primary-fixed": "#ffe088",
                        "background": "#fff8f8",
                        "error": "#ba1a1a",
                        "primary-fixed-dim": "#e9c349",
                        "primary-container": "#f1ca50",
                        "on-secondary-fixed": "#281719"
                    },
                    "fontFamily": {
                        "headline": ["Noto Serif"],
                        "body": ["Manrope"],
                        "label": ["Manrope"]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-surface selection:bg-secondary-fixed min-h-screen pb-32">
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-[#fff8f8]/60 dark:bg-stone-950/60 backdrop-blur-xl shadow-sm">
<div class="flex justify-between items-center px-8 py-6 w-full max-w-7xl mx-auto">
<div class="font-serif text-3xl font-bold tracking-widest text-[#735c00] dark:text-[#f1ca50]">LUMIÈRE</div>
<div class="flex items-center gap-6">
<button class="text-[#1f1a1b] dark:text-stone-300 hover:opacity-70 transition-opacity active:scale-95 duration-300">
<span class="material-symbols-outlined" data-icon="help">help</span>
</button>
<button class="text-[#1f1a1b] dark:text-stone-300 hover:opacity-70 transition-opacity active:scale-95 duration-300">
<span class="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</div>
</nav>
<main class="pt-32 px-6 max-w-7xl mx-auto">
<!-- Hero Header -->
<header class="mb-20 text-center">
<h1 class="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-4">
                ΟΔΗΓΟΣ ΔΗΜΙΟΥΡΓΙΑΣ ΑΡΧΕΙΩΝ
            </h1>
<p class="font-body text-on-surface-variant max-w-2xl mx-auto text-lg tracking-wide">
                Μετατρέψτε τον κώδικα της Lumière σε μια λειτουργική ψηφιακή εμπειρία ακολουθώντας τα τρία βήματα του ατελιέ μας.
            </p>
</header>
<!-- Tutorial Grid: Bento Style -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<!-- Step 1: Right Click -->
<section class="md:col-span-7 neumorphic-card bg-surface-container-high rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group">
<div class="relative z-10">
<span class="font-label text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">01 — Η ΑΡΧΗ</span>
<h2 class="font-headline text-3xl text-on-surface font-bold mb-6">ΒΗΜΑ 1: Δεξί Κλικ</h2>
<p class="font-body text-on-surface-variant mb-8 max-w-md">
                        Ξεκινήστε τη δημιουργία στην επιφάνεια εργασίας σας. Κάντε δεξί κλικ, επιλέξτε <span class="font-bold">Νέο</span> και στη συνέχεια <span class="font-bold">Έγγραφο Κειμένου</span>.
                    </p>
</div>
<div class="relative h-64 w-full bg-surface-container-lowest rounded-xl flex items-center justify-center border border-outline-variant/10 overflow-hidden shadow-inner">
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container to-transparent"></div>
<!-- Mock OS Menu -->
<div class="bg-white shadow-2xl rounded-lg p-2 w-48 text-sm font-medium border border-outline-variant/20">
<div class="px-3 py-2 text-on-surface-variant/40 text-[10px] uppercase tracking-tighter">Επιλογές</div>
<div class="px-3 py-2 hover:bg-secondary-fixed flex justify-between items-center rounded cursor-default group/item">
<span>Προβολή</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
</div>
<div class="px-3 py-2 bg-primary/5 text-primary flex justify-between items-center rounded cursor-default">
<span class="font-bold">Νέο</span>
<span class="material-symbols-outlined text-xs">chevron_right</span>
</div>
<div class="mt-2 pt-2 border-t border-outline-variant/10">
<div class="px-3 py-2 hover:bg-secondary-fixed flex items-center gap-2 rounded">
<span class="material-symbols-outlined text-sm text-on-surface-variant">folder</span>
<span>Φάκελος</span>
</div>
<div class="px-3 py-2 bg-secondary-fixed text-on-secondary-fixed flex items-center gap-2 rounded">
<span class="material-symbols-outlined text-sm text-primary">description</span>
<span class="font-bold">Έγγραφο Κειμένου</span>
</div>
</div>
</div>
<!-- Mouse Indicator -->
<div class="absolute bottom-10 right-20 transform group-hover:-translate-x-12 transition-transform duration-700">
<span class="material-symbols-outlined text-5xl text-primary/40" style="font-variation-settings: 'FILL' 1;">mouse</span>
</div>
</div>
</section>
<!-- Step 2: Rename -->
<section class="md:col-span-5 neumorphic-card bg-surface-container-low rounded-[2rem] p-10 flex flex-col">
<span class="font-label text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">02 — ΤΑΥΤΟΤΗΤΑ</span>
<h2 class="font-headline text-3xl text-on-surface font-bold mb-6">ΒΗΜΑ 2: Μετονομασία</h2>
<p class="font-body text-on-surface-variant mb-8 text-sm">
                    Αλλάξτε την επέκταση από <span class="text-error font-mono">.txt</span> σε <span class="text-primary font-mono font-bold">.html</span>. Αυτό είναι το κλειδί για να αναγνωρίσει ο browser το σχέδιο σας.
                </p>
<div class="space-y-4">
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 shadow-sm">
<div class="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">html</span>
</div>
<div class="flex-1">
<div class="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Κύρια Σελίδα</div>
<div class="font-mono text-lg text-primary">index.html</div>
</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 shadow-sm opacity-80">
<div class="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
</div>
<div class="flex-1">
<div class="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Πίνακας Ελέγχου</div>
<div class="font-mono text-lg">dashboard.html</div>
</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center gap-4 border border-outline-variant/10 shadow-sm opacity-60">
<div class="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">checkroom</span>
</div>
<div class="flex-1">
<div class="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mb-1">Ντουλάπα</div>
<div class="font-mono text-lg">wardrobe.html</div>
</div>
</div>
</div>
<div class="mt-auto pt-8">
<div class="bg-primary/5 p-4 rounded-xl border border-primary/10">
<div class="flex gap-2 items-start">
<span class="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
<p class="text-xs text-on-primary-container leading-relaxed">
                                Επιβεβαιώστε την αλλαγή στο παράθυρο προειδοποίησης των Windows πατώντας "Ναι".
                            </p>
</div>
</div>
</div>
</section>
<!-- Step 3: Paste Code -->
<section class="md:col-span-12 neumorphic-card bg-surface-container-highest rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
<div class="flex-1 z-10">
<span class="font-label text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">03 — ΖΩΝΤΑΝΙΑ</span>
<h2 class="font-headline text-4xl md:text-5xl text-on-surface font-bold mb-8 leading-tight">ΒΗΜΑ 3: Επικόλληση Κώδικα</h2>
<p class="font-body text-on-surface-variant mb-10 text-lg leading-relaxed">
                        Αντιγράψτε τον κώδικα από το κουμπί <span class="italic">'View Code'</span> του Stitch. Ανοίξτε το νέο σας αρχείο .html με το Notepad (Σημειωματάριο) και κάντε επικόλληση. Η δημιουργία σας είναι έτοιμη για προβολή.
                    </p>
<div class="flex gap-4">
<button class="gold-gradient text-on-primary px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
<span class="material-symbols-outlined">code</span>
                            Προβολή Κώδικα
                        </button>
<button class="bg-surface-container-lowest text-on-surface px-8 py-4 rounded-full font-bold shadow-sm hover:bg-secondary-container transition-colors flex items-center gap-2">
<span class="material-symbols-outlined">content_paste</span>
                            Αντιγραφή
                        </button>
</div>
</div>
<div class="flex-1 w-full max-w-lg aspect-square relative">
<div class="absolute inset-0 bg-secondary-fixed/30 rounded-full blur-[100px]"></div>
<div class="relative bg-surface p-6 rounded-2xl shadow-2xl border border-outline-variant/10 rotate-3 transform group-hover:rotate-0 transition-transform duration-1000 h-full">
<div class="flex items-center justify-between mb-4 border-b border-outline-variant/10 pb-4">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
</div>
<div class="text-[10px] font-mono text-on-surface-variant/50">index.html - Notepad</div>
</div>
<div class="font-mono text-sm space-y-2 text-on-surface-variant/80">
<div class="flex items-center gap-2"><span class="text-primary/50">1</span> <span class="text-secondary">&lt;!DOCTYPE html&gt;</span></div>
<div class="flex items-center gap-2"><span class="text-primary/50">2</span> <span class="text-secondary">&lt;html lang="el"&gt;</span></div>
<div class="flex items-center gap-2"><span class="text-primary/50">3</span> <span class="text-secondary">&lt;head&gt;</span></div>
<div class="flex items-center gap-2 bg-primary/10 -mx-6 px-6 py-1 w-[calc(100%+3rem)]"><span class="text-primary/50">4</span> <span class="text-primary font-bold">Paste (Ctrl+V) code here...</span></div>
<div class="flex items-center gap-2"><span class="text-primary/50">5</span> <span class="text-secondary">&lt;/head&gt;</span></div>
<div class="flex items-center gap-2"><span class="text-primary/50">6</span> <span class="text-secondary">&lt;body&gt;</span></div>
</div>
<div class="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-12">
<img alt="Professional workspace with high-end technology and warm editorial lighting" class="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-surface" data-alt="Close-up of a high-end designer laptop and gold stationery on a soft pink desk with morning light shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRYlP4Ajul_eQTlJ7TqG_WLNH2L3iNAcdOFZb_aqn5qDRu2d4B5SnZw-pHcLQOLLEfMTRsrtX5pKhwDoKRbvpRkeuOdMXeW7G9FoiG5FahNriD3bszZVbsHcFW8ncaOCLTRhikHVXZuZ_lV5qzuGD3RaZzHD2RgK6Ik8Fn1PIFSKS9PqNhDjVvwSkZ013-qIWZlQjmu4xF2adTFWFwGp_H4UqXDr3k19vkyxfcsVfE_AmiVwOTiAGQJSPIZ7MIB9bizsMv2o76ug"/>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 w-full z-50 bg-[#f8d8db]/60 dark:bg-stone-900/60 backdrop-blur-2xl no-border shadow-[0_-4px_20px_rgba(244,194,194,0.2)] h-24 flex justify-around items-center px-6 pb-4 rounded-t-[2rem]">
<button class="flex flex-col items-center justify-center text-[#1f1a1b]/60 dark:text-stone-400 hover:text-[#735c00] transition-all active:translate-y-1 duration-200">
<span class="material-symbols-outlined" data-icon="checkroom">checkroom</span>
<span class="font-sans text-[10px] uppercase tracking-widest font-medium mt-1">Closet</span>
</button>
<button class="flex flex-col items-center justify-center bg-white/40 dark:bg-white/10 rounded-full px-6 py-2 text-[#735c00] scale-110 active:translate-y-1 duration-200">
<span class="material-symbols-outlined" data-icon="architecture">architecture</span>
<span class="font-sans text-[10px] uppercase tracking-widest font-medium mt-1">Atelier</span>
</button>
<button class="flex flex-col items-center justify-center text-[#1f1a1b]/60 dark:text-stone-400 hover:text-[#735c00] transition-all active:translate-y-1 duration-200">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<span class="font-sans text-[10px] uppercase tracking-widest font-medium mt-1">Curate</span>
</button>
<button class="flex flex-col items-center justify-center text-[#1f1a1b]/60 dark:text-stone-400 hover:text-[#735c00] transition-all active:translate-y-1 duration-200">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-sans text-[10px] uppercase tracking-widest font-medium mt-1">Settings</span>
</button>
</nav>
</body></html>
