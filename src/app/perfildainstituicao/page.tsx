'use client';

import BarraNavegacao from "@/components/BarraNavegacao/page";
import style from './style.module.css'
import Rodape from "@/components/Rodape/page";


export default function PerfilInstituicao() {
    return (

        <div className={style.body}>
            <BarraNavegacao />
            <div className={style.tile} id="style.tile-1">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <div className="slider"></div>
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"> Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="setting-tab" data-toggle="tab" href="#setting" role="tab" aria-controls="setting" aria-selected="false"> Settings</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
                    <div className="tab-pane fade" id="setting" role="tabpanel" aria-labelledby="setting-tab">Settings</div>
                </div>

            </div>
        </div>


    )
}