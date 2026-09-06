// Reversible curated influence panel: remove this file plus the References markup to disable the feature.
(() => {
  const references = [
    ['The Cure', 'https://images.weserv.nl/?url=https%3A%2F%2Fi.scdn.co%2Fimage%2F7ca743e822b80133971ccf5c70fcbd77a4f4f508&w=960&h=640&fit=cover&output=webp&q=80'],
    ['My Bloody Valentine', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2024%2F11%2FMBV%25402000x1270.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Slowdive', 'https://images.weserv.nl/?url=https%3A%2F%2Fnpr.brightspotcdn.com%2F91%2Fab%2Faf4c1f6b494494b10a694e20e421%2Fslowdive-by-ingridpop-5198.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Depeche Mode', 'https://images.weserv.nl/?url=https%3A%2F%2Fi.scdn.co%2Fimage%2F2ec1d1c7a48df4244f0ba708eafd28b7afa6166b&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Cocteau Twins', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2024%2F07%2Fcocteau-twins%25402000x1270-696x442.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Beach House', 'https://images.weserv.nl/?url=https%3A%2F%2Fsubpop-wysiwyg.s3.amazonaws.com%2Fuploads%252F1495041497941-BeachHouse_2017_promo_ShawnBrackbill_DSC4554_600-72.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Mogwai', 'https://images.weserv.nl/?url=https%3A%2F%2Fthequietus.com%2Fapp%2Fuploads%2F2024%2F03%2FMogwai_1657817603.png&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Blonde Redhead', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.brooklynvegan.com%2Fwp-content%2Fuploads%2F2023%2F05%2F08%2Fattachment-Blonde-Redhead-by-Charles-Billot.jpeg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['DIIV', 'https://images.weserv.nl/?url=https%3A%2F%2Fcdn.fs.thecreativeindependent.com%2Fy4l0oWswTU6jtHYFoDvb&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Siouxsie and the Banshees', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.udiscovermusic.com%2Fwp-content%2Fuploads%2F2022%2F10%2FSIOUXSIE-THE-BANSHEES-GettyImages-84901602.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['The Smiths', 'https://images.weserv.nl/?url=https%3A%2F%2Fchorus.fm%2Fwp-content%2Fuploads%2F2016%2F06%2Fthe-smiths.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['The Cranberries', 'https://images.weserv.nl/?url=https%3A%2F%2Fmedia.hotpress.com%2Fuploads%2F2018%2F11%2F06144435%2FCranber2-1022x1024.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['The Jesus and Mary Chain', 'https://images.weserv.nl/?url=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5c87e14a2727be3ec00e25fd%2F1710950004884-TDQ4PQXKXKO83RDW3VEG%2FJAMCPromoPhotosNov23HiRes-3.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['The Stone Roses', 'https://images.weserv.nl/?url=https%3A%2F%2Fassets.vogue.com%2Fphotos%2F5891fa0b186d7c1b6493c827%2Fmaster%2Fw_2560%252Cc_limit%2F00-Stone-Roses.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Ride', 'https://images.weserv.nl/?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb958d509c00ca0257c95071e1&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Black Rebel Motorcycle Club', 'https://images.weserv.nl/?url=https%3A%2F%2Fv13.net%2Fwp-content%2Fuploads%2Fblack_rebel_motorcycle_club_by_tessa_angus.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Lush', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.lightfromadeadstar.org%2FReunion%2FLush-band-2016-Press-Photo.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Swervedriver', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.kexp.org%2Fmedia%2Ffiler_public_thumbnails%2Ffiler_public%2F77%2F3f%2F773f3dcb-0545-4759-ad8c-1abaa7cc0df2%2Fswervedriver-photo-by-alan-lawrence.jpg__800x500_q85_crop_subject_location-473%252C195_subsampling-2_upscale.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Just Mustard', 'https://images.weserv.nl/?url=https%3A%2F%2Fimages.discovery-prod.axs.com%2F2022%2F01%2Fjust-mustard_01-11-22_90_61ddbd3126532.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Drab Majesty', 'https://images.weserv.nl/?url=https%3A%2F%2Fgothdb-s3.ams3.cdn.digitaloceanspaces.com%2Fband-images%2Fa60a39244565cd542044376ae188ebfffe50716f45e7681219659b187c076672.jpeg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Soviet Soviet', 'https://images.weserv.nl/?url=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5b09e9ac506fbe8e21994dcf%2F1527411177135-9GVF2UFFAV4P0V0FZGME%2F0010219821_10.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['David Bowie', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.fubiz.net%2Fwp-content%2Fuploads%2F2017%2F11%2Ffubiz-david-bowie-tony-mcgee-photography-01-639x804.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Joy Division', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.gigslutz.co.uk%2Fwp-content%2Fuploads%2F2015%2F10%2FJoyDivision_GQ_13Aug12_rex_b.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Nine Inch Nails', 'https://images.weserv.nl/?url=https%3A%2F%2Fassets.exclaim.ca%2Fimage%2Fupload%2Fv1703989385%2Fnin_2.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Placebo', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2016%2F09%2FPlacebo04PR251111.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Queens of the Stone Age', 'https://images.weserv.nl/?url=https%3A%2F%2Ffestileaks.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fqotsa.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['The Smashing Pumpkins', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.concierto.cl%2Fwp-content%2Fuploads%2F2023%2F10%2FThe-Smashing-Pumpkins-jpeg.webp&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Deftones', 'https://images.weserv.nl/?url=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2Fo7p2vbhmbAmFq6ghbwJenc.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Verdena', 'https://images.weserv.nl/?url=https%3A%2F%2Fshop.universalmusic.it%2Fcdn%2Fshop%2Ffiles%2FVERDENA_2.jpg%3Fformat%3Dwebp%26quality%3D80%26v%3D1693900801%26width%3D2000&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Failure', 'https://images.weserv.nl/?url=https%3A%2F%2Fassets.blabbermouth.net%2Fmedia%2Ffailureapril2026_638.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Warpaint', 'https://images.weserv.nl/?url=https%3A%2F%2Fcdn.craft.cloud%2F3747bbfe-07db-499d-aa3d-b239ba21c062%2Fassets%2Fimages%2Fwarpaint-2022-press-shot-2-credit-Mia-Kirby.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Hum', 'https://images.weserv.nl/?url=https%3A%2F%2Fwww.northcoastcurrent.com%2Fwp-content%2Fuploads%2F2015%2F10%2F2015_10_beat_hum-900x661.jpg&w=960&h=640&fit=cover&output=webp&q=80'],
    ['Gleemer', 'https://images.weserv.nl/?url=https%3A%2F%2Fotherpeoplerecords.com%2Fcdn%2Fshop%2Ffiles%2FGleemer-webpromofinal_ddfb28b2-2a97-415d-bea6-138306b726fc_1080x.jpg%3Fv%3D1640787263&w=960&h=640&fit=cover&output=webp&q=80']
  ];

  const track = document.querySelector('[data-influence-track]');
  if (!track) return;

  track.innerHTML = references.map(([name, image]) => {
    // Keep a compact default, but offer a sharper derivative for the enlarged desktop card.
    const highResolutionImage = image.replace('&w=960&h=640&fit=cover&output=webp&q=80', '&w=1600&h=1067&fit=cover&output=webp&q=85');
    return `
      <article class="reference-card carousel-card" data-carousel-card>
        <img src="${image}" srcset="${image} 960w, ${highResolutionImage} 1600w" sizes="(max-width: 820px) 66vw, 540px" alt="" width="960" height="640" loading="lazy" decoding="async">
        <h2>${name}</h2>
      </article>
    `;
  }).join('');

  // The deck opens over Music and returns there on close, avoiding another section in the scroll flow.
  const dialog = document.querySelector('[data-references-dialog]');
  const openButton = document.querySelector('[data-open-references]');
  const closeButton = document.querySelector('[data-close-references]');
  if (!dialog || !openButton || !closeButton) return;

  // Wait for the native dialog to finish its layout before centring the active card.
  const refreshCarouselLayout = () => requestAnimationFrame(() => requestAnimationFrame(() => {
    window.dispatchEvent(new Event('resize'));
  }));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isClosing = false;
  const finishClose = () => {
    dialog.classList.remove('is-closing');
    document.body.classList.remove('references-open');
    isClosing = false;
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
  };
  const closeDialog = () => {
    if (isClosing || (!dialog.open && !dialog.hasAttribute('open'))) return;
    if (reducedMotion.matches) {
      finishClose();
      return;
    }

    isClosing = true;
    dialog.classList.add('is-closing');
    dialog.addEventListener('animationend', (event) => {
      if (event.animationName === 'references-deck-out') finishClose();
    }, { once: true });
  };

  openButton.addEventListener('click', () => {
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    document.body.classList.add('references-open');
    refreshCarouselLayout();
  });

  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDialog();
  });
})();
