require 'fileutils'

require 'rubygems'
require 'closure-compiler'
require 'fewer'

class Bundler
  DIST_DIR = File.expand_path('../../dist', __FILE__)
  SRC_DIR = File.expand_path('../../src', __FILE__)

  class << self
    def bundle!
      FileUtils.mkdir_p(DIST_DIR)

      write "#{DIST_DIR}/augment-#{version}.js" do
        Fewer::Engines::Js.new(SRC_DIR, files).read
      end

      write "#{DIST_DIR}/augment-#{version}.min.js" do
        Fewer::Engines::Js.new(SRC_DIR, files, :min => true).read
      end
    end

    def bundled
      Fewer::Engines::Js.new(SRC_DIR, files).read
    end

    private
      def files
        @files ||= %w(
          augment.array.every
          augment.array.filter
          augment.array.forEach
          augment.array.indexOf
          augment.array.isArray
          augment.array.lastIndexOf
          augment.array.map
          augment.array.reduce
          augment.array.reduceRight
          augment.array.some
          augment.date.now
          augment.date.toJSON
          augment.date.toISOString
          augment.function.bind
          augment.object.keys
          augment.string.trim
        )
      end

      def header
        @header ||= File.read(File.join(SRC_DIR, 'header.js'))
      end

      def version
        @version ||= File.read('VERSION').strip
      end

      def write(path, &block)
        puts "Generating #{path}"

        File.open(path, 'w') do |f|
          f.write header.gsub('@VERSION', version)
          f.write yield.gsub('@VERSION', version)
        end
      end
  end
end
