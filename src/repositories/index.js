const puppeteer = require('puppeteer');
const fs = require('fs');
const formattedImage = require('../utils/formattedImage');

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/memorias-ram');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'


    const container = 'div.ui-search-layout.ui-search-layout--grid'
    // pegar toda li que estão dentro de section
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText
    });

    const imgList = imgArray.map(({ src }) => {
      const isBase64 = src.includes('base64')
      return src
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })

    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/memory.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/processadores_NoIndex_True#applied_filter_id%3Dcategory%26applied_filter_name%3DCategorias%26applied_filter_order%3D5%26applied_value_id%3DMLB1712%26applied_value_name%3DComponentes+para+PC%26applied_value_order%3D10%26applied_value_results%3D52181%26is_custom%3Dfalse');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })

    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/processor.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/discos-acessorios/hds-ssds');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.andes-card.ui-search-result.ui-search-result--core.andes-card--flat.andes-card--padding-16'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/hard-disc.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/placas-video');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'
    
    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/video-card.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/desktop');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText
    });

    const imgList = imgArray.map(({ src }) => {
      return src
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/desktop.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/cooler-pc');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/cooler.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/fonte-pc');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/font.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

; (async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/placa-mãe');
  const hardwareList = await page.evaluate(() => {
    const SELECTOR_PRICE = 'span.andes-money-amount.ui-search-price__part.ui-search-price__part--medium.andes-money-amount--cents-superscript span.andes-money-amount__fraction'

    // pegar toda li que estão dentro de section
    const container = 'div.ui-search-layout.ui-search-layout--grid'
    const imgNodeList = document.querySelectorAll(`${container} img.ui-search-result-image__element`);
    const descriptionNodeList = document.querySelectorAll(`${container} h2.ui-search-item__title`);
    const priceNodeList = document.querySelectorAll(SELECTOR_PRICE);
    const linkNodeList = document.querySelectorAll(`${container} a.ui-search-item__group__element.ui-search-link__title-card.ui-search-link`);
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.map(({ innerText }) => {
      return innerText;
    });

    const imgList = imgArray.map(({ src }) => {
      return src;
    });

    const descriptionList = descriptionArray.map(({ outerText }) => outerText);

    const linkList = linkArray.map(({ href }) => href);

    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return { description, price, img, link };
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/motherboard.json', JSON.stringify(hardwareList, null, 2), err => {
    if (err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();
