import {FC} from "react";
import './Settings.css';
import { useThemeContext, Theme } from "../../context/themeModeContext";

const SettingsView: FC = () => {

    const {theme, onChangeTheme = () => {}} = useThemeContext()
    const onClickTheme = () => {
        const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
        onChangeTheme(themeValue);
    }

    const value = useThemeContext();
    const themeClassForm = value.theme==='dark' ? "light-form" : "dark-form"
    const themeClassInput = value.theme==='dark' ? "light-input" : "dark-input"
    const themeClassText = value.theme==='dark' ? "light-text" : "dark-text"

    const themeTitle = value.theme==='dark' ? "Dark" : "Light"
    const themeText = value.theme==='dark' ? "light" : "dark"
    const themeClassLable = value.theme==='dark' ? "light-lable" : "dark-lable"
    

    return (
            <div className="Settings-global-wrapper">
                <h2 className={`Profile-title ${themeClassText}`}>Profile</h2>
                <div className={`name-wrapper ${themeClassForm}`}> 
                    <div className="name-input-wrapper">
                        <div className="name-settings-wrapper">
                            <label className={`lable-theme ${themeClassLable}`} htmlFor="Name">Name</label>
                        </div>
                        <input className={`name-settings-input ${themeClassInput}`} type="text" id="Name" placeholder="Name"/>
                    </div>
                    
                    <div className="email-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label className={`lable-theme ${themeClassLable}`} htmlFor="Email">Email</label>
                        </div>
                        <input className={`email-settings-input ${themeClassInput}`} type="email" id="Email" placeholder="Email"/>
                    </div>
                </div>

                <div>
                <h2 className={`Profile-title ${themeClassText}`}>Password</h2>
                <div className={`change-password-wrapper ${themeClassForm}`}>
                    <div className="name-input-wrapper">
                        <div className="name-settings-wrapper">
                            <label className={`lable-theme ${themeClassLable}`} htmlFor="Name">Password</label>
                        </div>
                        <input className={`name-settings-input ${themeClassInput}`} type="password" id="Name" placeholder="Your password"/>
                    </div>
                <div className="confirm-pass">
                    <div className="email-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label className={`lable-theme ${themeClassLable}`} htmlFor="Email">New password</label>
                        </div>
                        <input className={`email-settings-input ${themeClassInput}`} type="password" id="Email" placeholder="New password"/>
                    </div>
                    <div className="password-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label className={`lable-theme ${themeClassLable}`} htmlFor="Email">Confirm password</label>
                        </div>
                        <input className={`email-settings-input ${themeClassInput}`} type="password" id="Email" placeholder="Confirm password"/>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    <div className="color-mode-settings-wrapper">
                    <h2 className={`Profile-title ${themeClassText}`}>Color mode</h2>
                        <div className={`color-mode-wrapper ${themeClassForm}`}>
                            <div className="color-mode-text-wrapper">
                                <h3 className={`color-mode-title ${themeClassForm}`}>{themeTitle}</h3>
                                <p className={`color-mode-text ${themeClassForm}`}>Use {themeText} theme</p>
                            </div>
                        <div className="dark-mode-switcher">
                            <label className={`switch ${themeClassLable}`}>
                                <input onClick={onClickTheme} checked={themeClassForm==='light-form'} type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        </div>
                        <div className="settings-button-wrapper">
                            <button className="button-cancel" style={{cursor: 'pointer'}}>Cancel</button>
                            <button className="button-save" style={{cursor: 'pointer'}}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SettingsView;