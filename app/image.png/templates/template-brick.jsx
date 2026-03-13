export default function TemplateBrick({ params }) {
  // Website config
  const website = params.get('website') || 'decool';

  const websiteConfigs = {
    decool: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/decool.png',
      watermark: { text: '', color: '#CECED0' },
      positions: {
        logo_brand: { x: 10, y: 10, width: 360, height: 120 },
        sku: { x: 35, y: 170 },
        title: { x: 35, y: 210 },
        age: { x: 148, y: 428 },
        pcs: { x: 148, y: 518 },
        product_image: { x: 255, y: 485, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#AC2129', size: 70, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#512829', size: 28, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#512829', size: 50, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#512829', size: 50, fontweight: 900 }
      }
    },
    lepingermany: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/lepingermany.png',
      watermark: { text: 'lepingermany.com', color: '#B0D4EC' },
      positions: {
        logo_brand: { x: 15, y: 1075, width: 350, height: 110 },
        sku: { x: 65, y: 333 },
        title: { x: 40, y: 105 },
        age: { x: 65, y: 482 },
        pcs: { x: 65, y: 405 },
        product_image: { x: 360, y: 520, width: 620, height: 580 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#2A50A4', size: 70 , fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#2A50A4', size: 40, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#2A50A4', size: 40, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#2A50A4', size: 40, fontweight: 900 }
      }
    },
    kaziblock: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/kaziblock.png',
      watermark: { text: 'kaziblock.com', color: 'rgba(51, 51, 51, 0.5)' },
      positions: {
        logo_brand: { x: 15, y: 1050, width: 360, height: 120 },
        sku: { x: 30, y: 380 },
        title: { x: 30, y: 170 },
        age: { x: 690, y: 1100 },
        pcs: { x: 690, y: 1040 },
        product_image: { x: 450, y: 400, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#333', size: 50, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#333', size: 50, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 }
      }
    },
    wange: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/wange.png',
      watermark: { text: 'wange.store', color: 'rgba(90, 1, 0, 0.5)' },
      positions: {
        logo_brand: { x: 840, y: 0, width: 360, height: 120 },
        sku: { x: 75, y: 330 },
        title: { x: 50, y: 165 },
        age: { x: 75, y: 490 },
        pcs: { x: 75, y: 410 },
        product_image: { x: 525, y: 600, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#5A0100', size: 60, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#512829', size: 42, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#512829', size: 42, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#512829', size: 42, fontweight: 900 }
      }
    }, 
    mocbrickland: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/mocbrickland.png',
      watermark: { text: 'mocbrickland.com', color: 'rgba(255, 255, 255, 0.5)' },
      positions: {
        logo_brand: { x: 820, y: 1060, width: 360, height: 120 },
        sku: { x: 150, y: 540 },
        title: { x: 30, y: 140 },
        age: { x: 150, y: 430 },
        pcs: { x: 150, y: 680 },
        product_image: { x: 525, y: 480, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#fff', size: 80, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#fff', size: 50, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#fff', size: 50, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#fff', size: 50, fontweight: 900 }
      }
    },
    mouldkingblock: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/mouldkingblock.png',
      watermark: { text: '', color: 'rgba(51, 51, 51, 0.3)' },
      positions: {
        logo_brand: { x: 10, y: 1070, width: 360, height: 120 },
        sku: { x: 135, y: 460 },
        title: { x: 50, y: 130 },
        age: { x: 125, y: 348 },
        pcs: { x: 125, y: 580 },
        product_image: { x: 450, y: 460, width: 655, height: 560 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#333', size: 50, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 }
      }
    },
    mouldkingstore: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/mouldking.png',
      watermark: { text: '', color: 'rgb(255, 255, 255, 0.5)' },
      positions: {
        logo_brand: { x: 15, y: 1050, width: 360, height: 120 },
        sku: { x: 68, y: 439 },
        title: { x: 25, y: 80 },
        age: { x: 68, y: 527 },
        pcs: { x: 68, y: 365 },
        product_image: { x: 440, y: 470, width: 655, height: 600 }
      },  
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#fff', size: 70, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#333', size: 40, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 }
      }
    },
    lepinland: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/lepinland.png',
      watermark: { text: 'lepinland.com', color: 'rgba(0, 0, 0, 0.3)' },
      positions: {
        logo_brand: { x: 15, y: 1050, width: 360, height: 120 },
        sku: { x: 65, y: 540 },
        title: { x: 110, y: 76 },
        age: { x: 125, y: 765 },
        pcs: { x: 125, y: 880 },
        product_image: { x: 525, y: 520, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#fff', size: 70, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#000', size: 50, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#000', size: 42, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#000', size: 50, fontweight: 900 }
      }
    },
    mocfactory: {
      background: 'https://lunar-merch-dev.b-cdn.net/background%20bricks/mocfactory.png',
      watermark: { text: 'mocfactory.com', color: '#C4A656' },
      positions: {
        logo_brand: { x: 15, y: 1050, width: 360, height: 120 },
        sku: { x: 50, y: 370 },
        title: { x: 50, y: 110 },
        age: { x: 50, y: 525 },
        pcs: { x: 50, y: 450 },
        product_image: { x: 465, y: 490, width: 655, height: 600 }
      },
      fonts: {
        title: { family: 'Montserrat-Black.ttf', color: '#AC2129', size: 70, fontweight: 900 },
        sku: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        age: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 },
        pcs: { family: 'Montserrat-Black.ttf', color: '#333', size: 42, fontweight: 900 }
      }
    }
  };

  const config = websiteConfigs[website] || websiteConfigs.decool;

  // Get dynamic content
  const bg_image = params.get('bg_image') || config.background;
  const product_image = params.get('product_image') ? 'https://remove-bg.tdagroup.online/' + params.get('product_image') : null;
  const title = params.get('title') || '';
  const sku = params.get('sku');
  const pcs = params.get('pcs');
  const age = params.get('age');
  const logo_brand = params.get('logo_brand');

  // require product_image parameter
  if (!product_image) {
    // you could render a placeholder or return null
    return (
      <div
        style={{
          width: '1200px',
          height: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f00',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        <p>Missing required parameter: product_image</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '1200px',
        height: '1200px',
        position: 'relative',
        display: 'flex',
      }}
    >
      {/* Background */}
      <img
        src={bg_image}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1200px',
          height: '1200px',
          zIndex: 0,
        }}
      />

      {/* Logo Brand - Optional */}
      {logo_brand && (
        <img
          src={logo_brand}
          alt="logo"
          style={{
            position: 'absolute',
            left: `${config.positions.logo_brand.x}px`,
            top: `${config.positions.logo_brand.y}px`,
            width: `${config.positions.logo_brand.width}px`,
            height: `${config.positions.logo_brand.height}px`,
            objectFit: 'contain',
            zIndex: 2,
          }}
        />
      )}

      {/* SKU - Optional */}
      {sku && (
        <div
          style={{
            position: 'absolute',
            left: `${config.positions.sku.x}px`,
            top: `${config.positions.sku.y}px`,
            fontSize: `${config.fonts.sku.size}px`,
            fontWeight: config.fonts.sku.fontweight,
            fontFamily: config.fonts.sku.family,
            color: config.fonts.sku.color,
            zIndex: 2,
          }}
        >
          {sku}
        </div>
      )}

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          left: `${config.positions.title.x}px`,
          top: `${config.positions.title.y}px`,
          fontSize: `${config.fonts.title.size}px`,
          fontWeight: config.fonts.title.fontweight,
          fontFamily: config.fonts.title.family,
          color: config.fonts.title.color,
          zIndex: 2,
        }}
      >
        {title}
      </div>

      {/* Age - Optional */}
      {age && (
        <div
          style={{
            position: 'absolute',
            left: `${config.positions.age.x}px`,
            top: `${config.positions.age.y}px`,
            fontSize: `${config.fonts.age.size}px`,
            fontWeight: config.fonts.age.fontweight,
            fontFamily: config.fonts.age.family,
            color: config.fonts.age.color,
            zIndex: 2,
          }}
        >
          {age}
        </div>
      )}

      {/* PCS - Optional */}
      {pcs && (
        <div
          style={{
            position: 'absolute',
            left: `${config.positions.pcs.x}px`,
            top: `${config.positions.pcs.y}px`,
            fontSize: `${config.fonts.pcs.size}px`,
            fontWeight: config.fonts.pcs.fontweight,
            fontFamily: config.fonts.pcs.family,
            color: config.fonts.pcs.color,
            zIndex: 2,
          }}
        >
          {pcs}
        </div>
      )}

      {/* Product Image - Remove Background */}
      {product_image && (
        <img
          src={product_image}
          alt="product"
          style={{
            position: 'absolute',
            left: `${config.positions.product_image.x}px`,
            top: `${config.positions.product_image.y}px`,
            width: `${config.positions.product_image.width}px`,
            height: `${config.positions.product_image.height}px`,
            objectFit: 'contain',
            zIndex: 1,
          }}
        />
      )}

      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '10px',
          right: '10px',
          fontSize: '30px',
          fontWeight: 400,
          color: config.watermark.color,
          zIndex: 3,
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        {config.watermark.text}
      </div>
    </div>
  );
}
