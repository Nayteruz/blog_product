import { IArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { IArticleDetailsRecommendationsSchema } from './articleDetailsRecommendationSchema';

export interface IArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsRecommendationsSchema;
}
