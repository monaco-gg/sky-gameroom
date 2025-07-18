// src/utils/loaderConfig.ts
const styles = require("../config/styles.config.json");
const texts = require("../config/texts.config.json");

interface StylesConfig {
  components: {
    effect: {
      clearScreen: {
        color: string;
      };
    };
    event: {
      borderColor?: string;
      gradientColor: {
        from: string;
        via: string;
        to: string;
      };      
    };
  };
}

interface TextsConfig {
  header: {
    logo: string;
    title: string;
  };
  branding: {
    logo: string;
    title: string;
  };
}

export const AppConfig = {
  styles: styles as StylesConfig,
  texts: texts as TextsConfig,
};
