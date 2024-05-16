import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAllMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOneMovie(id: number): Promise<Movie>{
    return this.movieRepository.findOne({where: {id}});
  }

  async addMovie(movieData: Partial<Movie>): Promise<Movie>{
    const movie = this.movieRepository.create(movieData)
    return this.movieRepository.save(movie)
  }

  async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie>{
    await this.movieRepository.update(id, movieData)
    return this.movieRepository.findOne({where:{id}})
  }

  async deleteMovie(id:number): Promise<void>{
    await this.movieRepository.delete(id)
  }
}
