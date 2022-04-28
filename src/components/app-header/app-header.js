

import { NavLink } from "react-router-dom"; 

import { PageHeader, Button } from 'antd';
import './app-headers.scss';


const AppHeader = () => (
    <div className="site-page-header-ghost-wrapper">
        <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Learn English"
            subTitle="Приложение для запоминания английских слов"
            extra={[
            <Button key="3"><NavLink to="/">Словарь</NavLink></Button>,
            <Button key="2"><NavLink to="/education"> Обучение</NavLink></Button>,
            <Button key="1" type="primary">
                Primary
            </Button>,
            ]}
        >
    
        </PageHeader>
    </div>
);
export default AppHeader;
