const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/memorias-ram');
  const hardwareList = await page.evaluate(() => {
    // pegar toda li que estão dentro de section
    const imgNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer img.ui-search-result-image__element.shops__image-element');
    const descriptionNodeList = document.querySelectorAll('h2.ui-search-item__title');
    const priceNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer ol li div.ui-search-price__second-line span.price-tag-amount');
    const linkNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer a.ui-search-link');
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.filter((price, index) => index % 2 == 0)
                        .map(({outerText}, index) => {
                          const [ , int,  , res] = outerText.split('\n');
                          return res ? Number(int + '.' + res) : Number(int);
                        });

    const imgList = imgArray.map(({dataset:{src}, src:outher}) => {
      return src ? src : outher;
    });

    const descriptionList = descriptionArray.map(({outerText}) => outerText);

    const linkList = linkArray.filter((link, index) => index % 2 === 0)
      .map(({href}) => href);
    
    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return {description, price, img, link};
    })

    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/memory.json', JSON.stringify(hardwareList, null, 2), err => {
    if(err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/processadores_NoIndex_True#applied_filter_id%3Dcategory%26applied_filter_name%3DCategorias%26applied_filter_order%3D5%26applied_value_id%3DMLB1712%26applied_value_name%3DComponentes+para+PC%26applied_value_order%3D10%26applied_value_results%3D52181%26is_custom%3Dfalse');
  const hardwareList = await page.evaluate(() => {
    // pegar toda li que estão dentro de section
    const imgNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer img.ui-search-result-image__element.shops__image-element');
    const descriptionNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer h2');
    const priceNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer div.ui-search-price__second-line span.price-tag-amount');
    const linkNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer a.ui-search-link');
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.filter((price, index) => index % 2 == 0)
                        .map(({outerText}, index) => {
                          const [ , int,  , res] = outerText.split('\n');
                          return res ? Number(int + '.' + res) : Number(int);
                        });

    const imgList = imgArray.map(({dataset:{src}, src:outher}) => {
      return src ? src : outher;
    });

    const descriptionList = descriptionArray.map(({outerText}) => outerText);

    const linkList = linkArray.filter((link, index) => index % 2 === 0)
      .map(({href}) => href);
    
    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return {description, price, img, link};
    })

    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/processor.json', JSON.stringify(hardwareList, null, 2), err => {
    if(err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/informatica/componentes-pc/discos-acessorios/hds-ssds');
  const hardwareList = await page.evaluate(() => {
    // pegar toda li que estão dentro de section
    const imgNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer img.ui-search-result-image__element.shops__image-element');
    const descriptionNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer h2');
    const priceNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer div.ui-search-price__second-line span.price-tag-amount');
    const linkNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer a.ui-search-link');
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.filter((price, index) => index % 2 == 0)
                        .map(({outerText}, index) => {
                          const [ , int,  , res] = outerText.split('\n');
                          return res ? Number(int + '.' + res) : Number(int);
                        });

    const imgList = imgArray.map(({dataset:{src}, src:outher}) => {
      return src ? src : outher;
    });

    const descriptionList = descriptionArray.map(({outerText}) => outerText);

    const linkList = linkArray.filter((link, index) => index % 2 === 0)
      .map(({href}) => href);
    
    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return {description, price, img, link};
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/hard-disc.json', JSON.stringify(hardwareList, null, 2), err => {
    if(err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lista.mercadolivre.com.br/placas-video');
  const hardwareList = await page.evaluate(() => {
    // pegar toda li que estão dentro de section
    const imgNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer img.ui-search-result-image__element.shops__image-element');
    const descriptionNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer h2');
    const priceNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer div.ui-search-price__second-line span.price-tag-amount');
    const linkNodeList = document.querySelectorAll('section.ui-search-results.ui-search-results--without-disclaimer a.ui-search-link');
    //transformar o node list em array
    const priceArray = [...priceNodeList];
    const imgArray = [...imgNodeList];
    const descriptionArray = [...descriptionNodeList];
    const linkArray = [...linkNodeList];
    //transformar os nodes (elementos html) em objetos JS
    const priceList = priceArray.filter((price, index) => index % 2 == 0)
                        .map(({outerText}, index) => {
                          const [ , int,  , res] = outerText.split('\n');
                          return res ? Number(int + '.' + res) : Number(int);
                        });

    const imgList = imgArray.map(({dataset:{src}, src:outher}) => {
      return src ? src : outher;
    });

    const descriptionList = descriptionArray.map(({outerText}) => outerText);

    const linkList = linkArray.filter((link, index) => index % 2 === 0)
      .map(({href}) => href);
    
    const hardwareList = descriptionList.map((description, index) => {
      const img = imgList.find((value, i) => i == index);
      const price = priceList.find((value, i) => i == index);
      const link = linkList.find((value, i) => i == index);

      return {description, price, img, link};
    })
    return hardwareList;
  });
  //escrever em um arquivo json
  fs.writeFile('src/repositories/video-card.json', JSON.stringify(hardwareList, null, 2), err => {
    if(err) throw new Error('something wen wrong');

    console.log('well done!');
  });

  await browser.close();
})();