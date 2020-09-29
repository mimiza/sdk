import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default ({ pageContext, className }) => {
    const { common, fileAbsolutePath } = pageContext

    return (
        <StaticQuery
            query={graphql`
                {
                    allFile(filter: { extension: { in: ["md", "json"] } }) {
                        edges {
                            node {
                                absolutePath
                                publicURL
                            }
                        }
                    }
                }
            `}
            render={data => {
                const results = data.allFile.edges.filter(
                    file =>
                        file.node &&
                        file.node.absolutePath &&
                        file.node.absolutePath === fileAbsolutePath
                )
                if (results[0] && results[0].node)
                    return (
                        <a
                            href={results[0].node.publicURL}
                            target="_blank"
                            rel="noreferrer"
                            className={className || ''}
                        >
                            <span className="icon">
                                <i className="fas fa-edit" />
                            </span>
                            {common.improveThisPage}
                        </a>
                    )
            }}
        />
    )
}
