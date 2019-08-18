import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "home":"home",
          "galleries":"galleries",
          "Device control":"Device control",
          "Gallery":"Gallery",
          "Camera":"Camera",
          "Design":"Design",
          "Colors":"Colors",
          "Drawing":"Drawing",
          "Sharing Option":"Sharing Option",
          "Effects":"Effects",
          "Settings":"Settings",
          "Feedback":"Feedback",
          "Help":"Help"
        }
      },
      ge:{
          translations:{
            "home":"მთავარი",
            "galleries":"ფოტოები",
            "Device control":"მოწყობილობის კონტროლი",
            "Gallery":"გალერია",
            "Camera":"კამერა",
            "Design":"დიზაინი",
            "Colors":"ფერები",
            "Drawing":"ხატვა",
            "Sharing Option":"გაზიარების ოპციები",
            "Effects":"ეფექტები",
            "Settings":"პარამეტრები",
            "Feedback":"უკუკავშირი",
            "Help":"დახმარება"
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
 
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false, // we use content as keys
 
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },
 
    react: {
      wait: true
    }
  });
 
export default i18n;