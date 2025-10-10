import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	// target
	MEMBER = 'MEMBER',
	PROPERTY = 'PROPERTY',
	ARTICLE = 'ARTICLE',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
