import {IsNotEmpty, IsString, IsUrl, IsNumber} from 'class-validator'

export class CreateMovieDto{
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    slug: string;

    @IsNotEmpty()
    @IsString()
    synopsis: string;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    trailerUrl: string;

    @IsNotEmpty()
    @IsString()
    @IsUrl()
    imgUrl: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsNotEmpty()
    @IsNumber()
    genreId: number;

    @IsNotEmpty()
    @IsNumber()
    authorId: number;
}