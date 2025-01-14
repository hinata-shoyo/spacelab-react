import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import BlogArchives from "../../components/blogArchives/blogArchives";
import Footer from "../../components/footer/footer";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage heroTitle="BLOG" />
			<BlogArchives />
			<Footer />
		</>
	);
}
