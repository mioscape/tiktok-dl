import type {NextApiRequest, NextApiResponse} from 'next';

export default async (_: NextApiRequest, res: NextApiResponse) => {
    return res.redirect('https://github.com/mioscape');
};
