import {FC} from "react";
import './Settings.css';
import { useThemeContext, Theme } from "../../context/themeModeContext";

const SettingsView: FC = () => {

    const {theme, onChangeTheme = () => {}} = useThemeContext()
    const onClickTheme = () => {
        const themeValue = theme === Theme.Light ? Theme.Dark : Theme.Light;
        onChangeTheme(themeValue);
    }

    return (
            <div className="Settings-global-wrapper">
                <h2 className="Profile-title">Profile</h2>
                <div className="name-wrapper"> 
                    <div className="name-input-wrapper">
                        <div className="name-settings-wrapper">
                            <label htmlFor="Name">Name</label>
                        </div>
                        <input className="name-settings-input" type="text" id="Name" placeholder="Name"/>
                    </div>
                    
                    <div className="email-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label htmlFor="Email">Email</label>
                        </div>
                        <input className="email-settings-input" type="email" id="Email" placeholder="Email"/>
                    </div>
                </div>

                <div>
                <h2 className="Profile-title">Password</h2>
                <div className="change-password-wrapper">
                    <div className="name-input-wrapper">
                        <div className="name-settings-wrapper">
                            <label htmlFor="Name">Password</label>
                        </div>
                        <input className="name-settings-input" type="password" id="Name" placeholder="Your password"/>
                    </div>
                <div className="confirm-pass">
                    <div className="email-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label htmlFor="Email">New password</label>
                        </div>
                        <input className="email-settings-input" type="password" id="Email" placeholder="New password"/>
                    </div>
                    <div className="email-input-wrapper">
                        <div className="email-settings-wrapper">
                        <label htmlFor="Email">Confirm password</label>
                        </div>
                        <input className="email-settings-input" type="password" id="Email" placeholder="Confirm password"/>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    <div className="color-mode-settings-wrapper">
                    <h2 className="Profile-title">Color mode</h2>
                        <div className="color-mode-wrapper">
                            <div className="color-mode-text-wrapper">
                                <h3>Dark</h3>
                                <p>Use dark thema</p>
                            </div>
                        <div className="dark-mode-switcher">
                            <label className="switch">
                                <input type="checkbox"/>
                                <span onClick={onClickTheme} className="slider round"></span>
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