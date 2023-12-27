import './Blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open AI is the future. Let us explore how it is?
                    GPT-4 is the latest version of Generative Pre-trained Transformers, a type of deep learning model used for natural language processing and text generation. It marks a significant milestone in the field of artificial intelligence, particularly in natural language processing." />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us explore how it is?" />
                </div>
            </div>
        </div>
    )
}

export default Blog;
