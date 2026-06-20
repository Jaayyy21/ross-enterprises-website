import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'lib', 'company-data.ts');
let content = fs.readFileSync(file, 'utf8');

// Replace "20 years" with "30 years"
content = content.replace("We are representing these companies for the past 20 years.", "We are representing these companies for the past 30 years.");

// We will regex replace the logos
const brands = [
  { id: 'parker', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Parker_Hannifin.svg' },
  { id: 'legris', logo: 'https://www.parker.com/content/dam/Parker-com/Static-Assets/Images/Logos/Parker-Legris-Logo.png' },
  { id: 'transair', logo: 'https://www.parker.com/content/dam/Parker-com/Static-Assets/Images/Logos/Parker-Transair-Logo.png' },
  { id: 'rectus', logo: 'https://www.parker.com/content/dam/Parker-com/Static-Assets/Images/Logos/Parker-Rectus-Logo.png' },
  { id: 'nitto', logo: 'https://www.nitto-kohki.co.jp/common/img/logo.png' },
  { id: 'origa', logo: 'https://www.parker.com/content/dam/Parker-com/Static-Assets/Images/Logos/Parker-Hannifin-Logo.png' },
  { id: 'piab', logo: 'https://logos-download.com/wp-content/uploads/2020/08/Piab_Logo.svg' },
  { id: 'pneumax', logo: 'https://www.pneumaxspa.com/wp-content/uploads/2019/05/logo-pneumax.png' },
  { id: 'luthra', logo: 'https://www.luthrapneumsys.com/wp-content/uploads/2021/06/logo.png' },
  { id: 'cmatic', logo: 'https://www.cmatic.com/wp-content/uploads/2020/06/logo-cmatic.png' },
  { id: 'baumer', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Baumer_Logo.svg' },
  { id: 'uflow', logo: 'https://www.uflowautomation.com/assets/img/logo.png' },
];

const customers = [
  { id: 'siemens', logo: 'https://logodownload.org/wp-content/uploads/2014/04/siemens-logo-1.png' },
  { id: 'abb', logo: 'https://logodownload.org/wp-content/uploads/2019/08/abb-logo-1.png' },
  { id: 'elecon', logo: 'https://static.cdnlogo.com/logos/e/10/elecon-engineering.png' },
  { id: 'ge', logo: 'https://www.freepnglogos.com/uploads/general-electric-logo-png/general-electric-logo-ge-png-1.png' },
  { id: 'ceat', logo: 'https://static.cdnlogo.com/logos/c/25/ceat.png' },
  { id: 'apollo', logo: 'https://corporate.apollotyres.com/media/1001/apollo-tyres-logo.png' },
  { id: 'banco', logo: 'https://bancoindia.com/wp-content/uploads/2021/05/logo.png' },
  { id: 'zydus', logo: 'https://companieslogo.com/img/orig/ZYDUSLIFE.NS-6e8e8e8e.png' },
  { id: 'raychem-rpg', logo: 'https://www.rpggroup.com/assets/images/logo/raychem-rpg.png' },
  { id: 'everest-spices', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Logo_of_Everest_spices.png/800px-Logo_of_Everest_spices.png' },
  { id: 'real-namkeen', logo: 'https://realbites.com/wp-content/uploads/2023/05/Real-Bites-Logo.png' },
  { id: 'mg-motor', logo: 'https://logos-download.com/wp-content/uploads/2016/02/MG_Motor_logo.png' },
  { id: 'schneider-electric', logo: 'https://companieslogo.com/img/orig/SU.PA-6e8e8e8e.png' },
  { id: 'rotex', logo: 'https://rotexautomation.com/wp-content/uploads/2021/06/Rotex-Logo.png' },
  { id: 'amul-dairy', logo: 'https://amul.com/files/logos/amul-logo.png' },
  { id: 'birla-century', logo: 'https://www.adityabirla.com/assets/images/logo.png' }
];

for (const b of brands) {
  const ext = b.logo.split('.').pop().split('?')[0];
  content = content.replace(`logo: "${b.logo}"`, `logo: "/assets/brands/${b.id}.${ext}"`);
}

for (const c of customers) {
  const ext = c.logo.split('.').pop().split('?')[0];
  content = content.replace(`logo: "${c.logo}"`, `logo: "/assets/customers/${c.id}.${ext}"`);
}

fs.writeFileSync(file, content);
console.log("Updated company-data.ts");
