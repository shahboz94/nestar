import { Module } from '@nestjs/common';
import LikeSchema from '../../schemas/Like.model';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeService } from '../../component/like/like.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Comment',
				schema: LikeSchema,
			},
		]),
	],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {}
