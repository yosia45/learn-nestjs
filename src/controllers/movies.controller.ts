import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { MoviesService } from 'src/services/movie.service';
import { Movie } from 'src/entities/movie.entity';
import { CreateMovieDto } from 'src/dto/create-movie.dto';
import { UpdateMovieDto } from 'src/dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAllMovies(): Promise<Movie[]> {
    return this.moviesService.findAllMovies();
  }

  @Get(':id')
  async findOneMovie(@Param('id') id: number): Promise<Movie> {
    return this.moviesService.findOneMovie(id);
  }

  @Post()
  async addMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.addMovie(createMovieDto);
  }

  @Put(':id')
  async updateMovie(
    @Param('id') id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.updateMovie(id, updateMovieDto);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: number): Promise<void> {
    return this.moviesService.deleteMovie(id);
  }
}
