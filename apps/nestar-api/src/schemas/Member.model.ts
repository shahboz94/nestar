import { Schema } from 'mongoose';
import { MemberAuthType, MemberStatus, MemberType } from '../libs/enums/member.enum';

const MemberSchema = new Schema(
	{
		memberType: {
			type: String,
			enum: MemberType,
			default: MemberType.USER,
		},

		MemberStatus: {
			type: String,
			enum: MemberStatus,
			default: MemberStatus.ACTIVE,
		},

		MemberAuthType: {
			type: String,
			enum: MemberAuthType,
			default: MemberAuthType.PHONE,
		},

		MemberPHONE: {
			type: String,
			index: { unique: true, sparse: true },
			required: true,
		},

		MemberNick: {
			type: String,
			index: { unique: true, sparse: true },
			required: true,
		},

		MemberPassword: {
			type: String,
			select: false,
			required: true,
		},

		MemberFullName: {
			type: String,
		},

		MemberImage: {
			type: String,
			default: '',
		},

		MemberAddress: {
			type: String,
		},

		MemberDesc: {
			type: String,
		},

		MemberProperties: {
			type: Number,
			default: 0,
		},

		MemberArticles: {
			type: Number,
			default: 0,
		},

		MemberFollowers: {
			type: Number,
			default: 0,
		},

		MemberFollowings: {
			type: Number,
			default: 0,
		},

		MemberPoints: {
			type: Number,
			default: 0,
		},

		MemberLikes: {
			type: Number,
			default: 0,
		},

		MemberViews: {
			type: Number,
			default: 0,
		},

		MemberComments: {
			type: Number,
			default: 0,
		},

		MemberRank: {
			type: Number,
			default: 0,
		},

		MemberWarnings: {
			type: Number,
			default: 0,
		},

		MemberBlocks: {
			type: Number,
			default: 0,
		},

		deletedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'members' },
);

export default MemberSchema;
