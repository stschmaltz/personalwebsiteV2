import React from 'react';
import './PortfolioPage.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import PortfolioPageTitleContent from './PortfolioPageTitleContent';
import PortfolioPageMainContent from './PortfolioPageMainContent';

const PortfolioPage = () => {
	return (
		<div className="portfolio-page_content-container">
			<PageTitle title="Portfolio" ContentComponent={PortfolioPageTitleContent} />
			<PortfolioPageMainContent />
		</div>
	);
};

export default PortfolioPage;
