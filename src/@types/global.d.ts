declare module "*.module.scss" {
    const styles: { [key: string]: string };
    export default styles;
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

declare module "*.module.css";
declare module "*.module.scss";