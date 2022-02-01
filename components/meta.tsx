import { Component } from 'react';
import Head from 'next/head';

interface Props {
    title: string,
    keywords: string,
    description: string
}

type MetaProps = typeof Meta.defaultProps & Props;

class Meta extends Component<MetaProps> {
    static defaultProps = {
        title: 'Nextjs Template',
        keywords: 'fill your keywords here',
        descrition: ''
    };

    constructor(props: MetaProps) {
        super(props);
    }
    
    render() {
        return (
            <Head>
                <meta name='viewport'
                content='width=device-width,
                initial-scale=1' />
                <meta name='keywords' content={this.props.keywords} />
                <meta name='description' content = {this.props.description} />
                <meta charSet='utf-8' />
                <link rel="icon" href="/favicon.ico" />
                <title>{this.props.title}</title>
            </Head>
        )
    }
}

export default Meta;
